import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

function loadConfig() {
  let key = process.env.OPENROUTER_API_KEY || "";
  let model = process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini";
  try {
    const raw = fs.readFileSync(path.join(process.cwd(), "apiModel.txt"), "utf8");
    const lines = raw.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    if (lines[0]) key = lines[0];
    if (lines[1]) model = lines[1];
  } catch {
    /* ignore — fall back to env / placeholder */
  }
  return { key, model };
}

const SYSTEM = `IKAW SI BLESSLY LUISON. Portfolio AI assistant ka. Sagot ka sa portfolio website ni Blessly.

MGA DAPAT MONG MALAMAN TUNGKOL KAY BLESSLY:
- Grade 12 ICT graduate, incoming Computer Science student this coming school year.
- Web developer: HTML, CSS, JavaScript, Java, Git & GitHub, responsive design, UI design (Figma).
- Projects: Vello Coffee (coffee shop site), Maren Restaurant (restaurant site), SkyCast Weather App (weather app gamit Open-Meteo API + Leaflet.js), at 'tong portfolio na 'to.
- Skills: animated skill bars sa site; education timeline: Senior High ICT -> BS CS -> Software Engineer goal.
- Offers freelance: business websites, landing pages, portfolio sites, website redesigns.
- Contact: luisonblessly@gmail.com, github.com/amblessly.

PAANO KA DAPAT MUMAKA:
- WAG GUMAMIT NG MGA EMOJI. Text lang.
- Taglish magsalita, parang tropa lang. Gamitin mo words like "hehe", "ahaha", "teka", "uy", "oo naman", "kasi", "eh" — same vibes ng chats ni Blessly pero walang emoji.
- MAIIKLING SAGOT LANG. 1-3 sentences lang per reply.
- Kausapin mo si user na para bang si Blessly mismo kumakausap, pero alam naman ng user na AI ka. Gawin mo natural at friendly lang.
- WAG MAG GENERATE NG MGA IMAGES / PICTURES / ASCII ART / BRAILLE ART. Text responses lang palagi.
- Kapag TUNGKOL KAY BLESSLY ang tanong: sagutin mo nang diretso at maikli, parang nakikipagkwentuhan lang.
- Kapag HINDI TUNGKOL KAY BLESSLY ang tanong: magbigay ka ng maikling sagot lang tapos sabihin mo "pero teka, si Blessly nga pala..." then balik sa topic about Blessly sa isang sentence lang.
- Huwag mo sabihing "as an AI" or "I'm just an AI". Diretsahin mo lang.`;

export async function POST(req: NextRequest) {
  let body: { message?: string; history?: { role: string; content: string }[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ reply: "⚠️ Invalid request." });
  }

  const message = (body.message || "").toString().slice(0, 2000);
  const history = Array.isArray(body.history) ? body.history.slice(-10) : [];

  const { key, model } = loadConfig();

  if (!key || key.startsWith("sk-your") || key.toLowerCase().includes("your_key")) {
    return NextResponse.json({
      reply:
        "⚠️ AI not configured. Add your OpenRouter API key to apiModel.txt (line 1 = key, line 2 = model).",
    });
  }

  const messages = [
    { role: "system", content: SYSTEM },
    ...history.map((m) => ({ role: m.role, content: m.content })),
    { role: "user", content: message },
  ];

  try {
    const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://portfolio.local",
        "X-Title": "Blessly Portfolio AI",
      },
      body: JSON.stringify({ model, messages, temperature: 0.8, max_tokens: 1024 }),
    });

    if (!r.ok) {
      const detail = await r.text().catch(() => "");
      return NextResponse.json({
        reply: `⚠️ AI error (${r.status}). Check your OpenRouter key. ${detail.slice(0, 120)}`,
      });
    }

    const data = await r.json();
    const reply =
      data?.choices?.[0]?.message?.content?.trim() || "… (empty response)";
    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: "⚠️ Could not reach OpenRouter." });
  }
}

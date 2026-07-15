"use client";

import { useEffect, useRef, useState } from "react";

type Role = "cmd" | "out" | "sys" | "user" | "ai";
type Line = { role: Role; text: string };

const WELCOME: Line = {
  role: "sys",
  text: "Interactive shell — type 'help' for commands, or 'aichatBot.sh' to chat with my AI.",
};

function runShell(cmd: string): string[] {
  const c = cmd.toLowerCase();
  if (c === "help")
    return [
      "Commands:",
      "  aichatBot.sh  - launch the AI chat about me",
      "  neofetch      - show system info",
      "  whoami        - who am i",
      "  ls            - list files",
      "  date          - current date",
      "  clear         - clear this console",
      "  help          - show this help",
    ];
  if (c === "whoami") return ["blesdev"];
  if (c === "pwd") return ["/home/blesdev"];
  if (c === "ls") return ["about.md   projects/   skills.json   contact.txt   ai/"];
  if (c === "date") return [new Date().toString()];
  if (c === "neofetch")
    return [
      "blesdev@blorb",
      "-----------------",
      "OS: Portfolio Linux (Custom)",
      "Host: Web Developer Rig",
      "DE: Next.js 15   WM: React 19",
      "Theme: Dark / Light (auto)",
    ];
  if (c.startsWith("echo ")) return [cmd.slice(5)];
  return [
    `> running '${cmd}' ...`,
    "> [✓] process completed (simulated) — nothing actually happened, but nice try 😄",
  ];
}

export default function TerminalConsole() {
  const [output, setOutput] = useState<Line[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"shell" | "chat">("shell");
  const [busy, setBusy] = useState(false);
  const [typing, setTyping] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [loadingDots, setLoadingDots] = useState("");
  const [spinnerFrame, setSpinnerFrame] = useState(0);
  const loadingTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const spinnerTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const typingTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const focus = () => inputRef.current?.focus();

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [output, typing, loading]);

  useEffect(() => {
    focus();
    return () => {
      if (typingTimer.current) clearInterval(typingTimer.current);
      if (loadingTimer.current) clearInterval(loadingTimer.current);
    };
  }, []);

  useEffect(() => {
    if (loading) {
      let dots = "";
      loadingTimer.current = setInterval(() => {
        dots = dots.length >= 3 ? "" : dots + ".";
        setLoadingDots(dots);
      }, 400);
      spinnerTimer.current = setInterval(() => {
        setSpinnerFrame((f) => (f + 1) % 9);
      }, 100);
    } else {
      if (loadingTimer.current) clearInterval(loadingTimer.current);
      if (spinnerTimer.current) clearInterval(spinnerTimer.current);
      setLoadingDots("");
      setSpinnerFrame(0);
    }
    return () => {
      if (loadingTimer.current) clearInterval(loadingTimer.current);
      if (spinnerTimer.current) clearInterval(spinnerTimer.current);
    };
  }, [loading]);

  function typeOut(text: string) {
    let i = 0;
    setTyping("");
    setBusy(true);
    if (typingTimer.current) clearInterval(typingTimer.current);
    typingTimer.current = setInterval(() => {
      i++;
      setTyping(text.slice(0, i));
      if (i >= text.length) {
        if (typingTimer.current) clearInterval(typingTimer.current);
        setOutput((o) => [...o, { role: "ai", text }]);
        setTyping("");
        setBusy(false);
        focus();
      }
    }, 10);
  }

  async function handleSend() {
    const raw = input.trim();
    if (!raw || busy) {
      if (busy) setInput("");
      return;
    }
    setInput("");
    setHistoryIdx(-1);
    if (raw) setCmdHistory((h) => [...h, raw]);

    if (mode === "shell") {
      if (raw === "clear" || raw === "cls") {
        setOutput([]);
        focus();
        return;
      }
      if (["aichatbot.sh", "aichat", "chat", "ai"].includes(raw.toLowerCase())) {
        setOutput((o) => [
          ...o,
          { role: "cmd", text: `blesdev@blorb: ~$ ${raw}` },
          {
            role: "sys",
            text: 'AI chat mode started. Ask me anything about Blessly (type "exit" to quit).',
          },
        ]);
        setMode("chat");
        focus();
        return;
      }
      const out = runShell(raw);
      setOutput((o) => [
        ...o,
        { role: "cmd", text: `blesdev@blorb: ~$ ${raw}` },
        ...out.map((t) => ({ role: "out" as Role, text: t })),
      ]);
      focus();
      return;
    }

    // chat mode
    if (["exit", "quit", ":q"].includes(raw.toLowerCase())) {
      setOutput((o) => [
        ...o,
        { role: "user", text: raw },
        { role: "sys", text: "AI chat ended. Back to shell." },
      ]);
      setMode("shell");
      focus();
      return;
    }

    const prev = output;
    setOutput((o) => [...o, { role: "user", text: raw }]);

    const history = prev
      .filter((x) => x.role === "user" || x.role === "ai")
      .slice(-10)
      .map((x) => ({ role: x.role === "user" ? "user" : "assistant", content: x.text }));

    setLoading(true);
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: raw, history }),
      });
      const data = await res.json();
      setLoading(false);
      typeOut(data.reply || "…");
    } catch {
      setLoading(false);
      setOutput((o) => [
        ...o,
        { role: "ai", text: "⚠️ Could not reach AI. Check apiModel.txt / network." },
      ]);
      setBusy(false);
      focus();
    }
  }

  function lineClass(role: Role) {
    switch (role) {
      case "cmd":
        return "tc-cmd";
      case "sys":
        return "tc-sys";
      case "user":
        return "tc-user";
      case "ai":
        return "tc-ai";
      default:
        return "tc-out";
    }
  }

  function renderText(role: Role, text: string) {
    if (role === "user") return `> ${text}`;
    if (role === "ai") return `> ${text}`;
    return text;
  }

  return (
    <div className="terminal-console" onMouseDown={() => focus()}>
      <div className="tc-log" ref={logRef}>
        {output.map((o, idx) => (
          <div key={idx} className={`tc-line ${lineClass(o.role)}`}>
            {renderText(o.role, o.text)}
          </div>
        ))}
        {loading && (
          <div className="tc-line tc-loading">
            <span className="tc-spinner">{["⠋","⠙","⠹","⠸","⠼","⠴","⠦","⠧","⠇"][spinnerFrame]}</span> thinking{loadingDots}
          </div>
        )}
        {busy && !loading && (
          <div className="tc-line tc-ai">
            {typing !== "" ? (
              <>
                &gt; {typing}
                <span className="tc-cursor">▌</span>
              </>
            ) : (
              <>
                &gt; <span className="tc-cursor">▌</span>
              </>
            )}
          </div>
        )}
      </div>
      <div className="tc-prompt">
        <span className="tc-label">
          {mode === "shell" ? "blesdev@blorb: ~$" : "ai-chat>"}
        </span>
        <input
          ref={inputRef}
          className="tc-input"
          value={input}
          disabled={busy}
          placeholder={
            mode === "shell"
              ? "type a command (try: aichatBot.sh, help)"
              : "ask me anything about Blessly..."
          }
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              if (cmdHistory.length === 0) return;
              const next = historyIdx + 1;
              if (next < cmdHistory.length) {
                setHistoryIdx(next);
                setInput(cmdHistory[cmdHistory.length - 1 - next]);
              }
            } else if (e.key === "ArrowDown") {
              e.preventDefault();
              if (historyIdx <= 0) {
                setHistoryIdx(-1);
                setInput("");
              } else {
                const next = historyIdx - 1;
                setHistoryIdx(next);
                setInput(cmdHistory[cmdHistory.length - 1 - next]);
              }
            }
          }}
        />
      </div>
    </div>
  );
}

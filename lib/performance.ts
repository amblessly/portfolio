/**
 * Detects low-end devices and applies CSS classes
 * to globals.css for animation optimization.
 *
 * Classes added to <html>:
 *   - "perf-low"        → CPU ≤ 2 or RAM ≤ 4 GB
 *   - "prefers-reduced" → user OS motion setting
 *   - "save-data"       → user enabled data saver
 */
export function initPerformance() {
  if (typeof window === "undefined") return;

  const root = document.documentElement;

  // ── 1. CPU cores detection ──
  const cores = navigator.hardwareConcurrency || 2;
  if (cores <= 2) root.classList.add("perf-low");

  // ── 2. Device memory (Chrome only) ──
  const mem = (navigator as any).deviceMemory;
  if (mem && mem <= 4) root.classList.add("perf-low");

  // ── 3. Save-Data header ──
  if ((navigator as any).connection?.saveData) root.classList.add("save-data");

  // ── 4. prefers-reduced-motion ──
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mq.matches) root.classList.add("prefers-reduced");

  mq.addEventListener("change", (e) => {
    root.classList.toggle("prefers-reduced", e.matches);
  });
}

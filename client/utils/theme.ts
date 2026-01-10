// Theme management utility

export type Theme = "light" | "dark";

export function getTheme(): Theme {
  const saved = localStorage.getItem("theme") as Theme | null;
  if (saved) return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function setTheme(theme: Theme): void {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
}

export function toggleTheme(): Theme {
  const current = getTheme();
  const next = current === "light" ? "dark" : "light";
  setTheme(next);
  return next;
}

export function initTheme(): void {
  const theme = getTheme();
  document.documentElement.setAttribute("data-theme", theme);
}

// Auto-init on load
if (typeof window !== "undefined") {
  initTheme();
}

import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "writings-theme";

function readSaved(): Theme | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * Light/dark theme that defaults to the OS setting, lets the user override it,
 * and remembers that override. While `active`, writes `data-theme` on <body>
 * so CSS can swap its color variables.
 */
export function useTheme(active: boolean) {
  const [saved, setSaved] = useState<Theme | null>(readSaved);
  const [system, setSystem] = useState<Theme>(systemTheme);
  const theme: Theme = saved ?? system;

  // Follow OS changes live (only matters until the user picks a theme)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setSystem(mq.matches ? "dark" : "light");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!active) return;
    document.body.dataset.theme = theme;
    return () => { delete document.body.dataset.theme; };
  }, [active, theme]);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setSaved(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* storage blocked — still works for this visit */ }
  };

  return { theme, toggle };
}

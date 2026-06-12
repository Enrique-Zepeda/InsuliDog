import { useEffect } from "react";
import { THEME_STORAGE_KEY, type Theme } from "../slices/themeSlice";
import { useTheme } from "../hooks/useTheme";

function getSystemTheme(): "light" | "dark" {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return isDark ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = window.document.documentElement;

  const resolvedTheme = theme === "system" ? getSystemTheme() : theme;

  root.classList.toggle("dark", resolvedTheme === "dark");

  root.style.colorScheme = resolvedTheme;
}

export function ThemeSynchronizer() {
  const { theme } = useTheme();

  useEffect(() => {
    applyTheme(theme);

    window.localStorage.setItem(THEME_STORAGE_KEY, theme);

    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = () => {
      applyTheme("system");
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [theme]);

  return null;
}

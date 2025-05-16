import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return <button onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')} className="mx-3 transition text-emerald-50 w-6 h-6 cursor-pointer">
    {currentTheme === 'dark' ? <Sun /> : <Moon />}
  </button>;
};

export default ThemeToggler;

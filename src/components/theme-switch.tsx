"use client";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/shadcn/ui/toggle-group";


export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ToggleGroup size="lg" type="single" className="z-10 text-muted-foreground">
      <ToggleGroupItem
        value="light"
        aria-label="Toggle light theme"
        title="Toggle light theme"
        onClick={() => setTheme("light")}
        aria-checked={theme === "light"}
        data-state={theme === "light" ? "on" : "off"}
      >
        <SunIcon className="size-4" aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        aria-label="Toggle dark theme"
        title="Toggle dark theme"
        onClick={() => setTheme("dark")}
        aria-checked={theme === "dark"}
        data-state={theme === "dark" ? "on" : "off"}
      >
        <MoonIcon className="size-4" aria-hidden="true" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="system"
        aria-label="Toggle system theme"
        title="Toggle system theme"
        onClick={() => setTheme("system")}
        aria-checked={theme === "system"}
        data-state={theme === "system" ? "on" : "off"}
      >
        <MonitorIcon className="size-4" aria-hidden="true" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

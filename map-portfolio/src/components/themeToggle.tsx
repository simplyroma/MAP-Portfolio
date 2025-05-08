'use client';

import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { Flower2 } from "lucide-react";
import { Moon } from "lucide-react";

export function ThemeToggle() {
    const {theme, setTheme} = useTheme();

    return (
        <Button variant="no_outline" className="size-9" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Flower2 color="#1e1e1e" className="absolute size-6 rotate-0 scale-100 dark:rotate-90 dark:scale-0 transition-all duration-100 ease-in-out"/>
            <Moon className="absolute size-6 rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all duration-100 ease-in-out"/>
        </Button>
    )
};
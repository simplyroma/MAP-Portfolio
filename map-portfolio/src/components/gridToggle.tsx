"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Grid3x3, GalleryHorizontalEnd } from "lucide-react";
import { Button } from "./ui/button";

export function GridToggle() {
  const [isGrid, setIsGrid] = useState(true);
  const { theme } = useTheme();

  const iconColor = theme === "dark" ? "#fafafa" : "#1e1e1e";

  const toggleGrid = () => {
    setIsGrid(!isGrid);
  };

  return (
    <Button variant="no_outline" className="size-9" onClick={toggleGrid}>
      {isGrid ? (
        <Grid3x3
          color={iconColor}
          className={`absolute size-6 transition-transform duration-200 ${
            isGrid ? "rotate-0 scale-100" : "rotate-90 scale-0"
          }`}
        />
      ) : (
        <GalleryHorizontalEnd
          color={iconColor}
          className={`absolute size-6 transition-transform duration-200 ${
            !isGrid ? "rotate-0 scale-100" : "rotate-90 scale-0"
          }`}
        />
      )}
    </Button>
  );
}
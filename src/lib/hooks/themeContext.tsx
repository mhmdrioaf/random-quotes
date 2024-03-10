import React from "react";
import { COLORS } from "../constants";

export const ThemeContext = React.createContext<ThemeContext | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [activeColor, setActiveColor] = React.useState<string>(COLORS[0]);

  const onColorChanges = () => {
    const minValue = 0;
    const maxValue = COLORS.length - 1;
    const randomIndex =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    const currentIndex = COLORS.indexOf(activeColor);
    const nextIndex =
      currentIndex === randomIndex
        ? randomIndex === maxValue
          ? randomIndex - 1
          : randomIndex + 1
        : randomIndex;
    setActiveColor(COLORS[nextIndex]);
  };

  const styles = {
    backgroundColor: activeColor,
    color: activeColor,
  };

  const value: ThemeContext = {
    styles,
    handler: {
      onColorChanges,
    },
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

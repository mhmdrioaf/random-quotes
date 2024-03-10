import React from "react";
import { QUOTES } from "../constants";

export const QuoteContext = React.createContext<TQuoteContext | null>(null);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [activeQuote, setActiveQuote] = React.useState<TQuote>(QUOTES[0]);

  const onQuoteChanges = () => {
    const minValue = 0;
    const maxValue = QUOTES.length - 1;
    const randomIndex =
      Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    const activeIndex = QUOTES.indexOf(activeQuote);
    const newQuoteIndex =
      activeIndex === randomIndex
        ? randomIndex === maxValue
          ? randomIndex - 1
          : randomIndex + 1
        : randomIndex;
    setActiveQuote(QUOTES[newQuoteIndex]);
  };

  const value: TQuoteContext = {
    activeQuote,
    handler: {
      onQuoteChanges,
    },
  };
  return (
    <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
  );
}

import React from "react";
import { twMerge } from "tailwind-merge";
import { ThemeContext } from "../../lib/hooks/themeContext";

interface IQuoteGenerate extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

export default function QuoteGenerateButton({
  onClick,
  ...props
}: IQuoteGenerate) {
  const { styles } = React.useContext(ThemeContext) as ThemeContext;
  return (
    <button
      id="new-quote"
      style={{
        backgroundColor: styles.backgroundColor,
        color: "white",
      }}
      className={twMerge(
        "block px-4 py-2 rounded-sm text-xs font-medium bg-inherit",
        props.className
      )}
      onClick={onClick}
    >
      Generate new Quote
    </button>
  );
}

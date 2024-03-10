import React from "react";
import { INTENTS } from "../../lib/constants";
import { ThemeContext } from "../../lib/hooks/themeContext";

interface IQuoteShareButtonsProps {
  quote: TQuote;
}

export default function QuoteShareButtons({ quote }: IQuoteShareButtonsProps) {
  const { styles } = React.useContext(ThemeContext) as ThemeContext;
  return (
    <div className="inline-flex items-center gap-2">
      <a
        id="tweet-quote"
        style={{
          backgroundColor: styles.backgroundColor,
          color: "white",
        }}
        className="px-4 py-2 rounded-sm text-xs font-medium text-center transition-colors"
        href={INTENTS.twitter(quote)}
        target="_blank"
      >
        Share to X
      </a>
    </div>
  );
}

import React from "react";
import QuoteBox from "./components/quotes/box";
import QuoteGenerateButton from "./components/quotes/newQuoteBtn";
import QuoteShareButtons from "./components/quotes/share";
import QuoteText from "./components/quotes/text";
import { QuoteContext } from "./lib/hooks/quoteContext";
import { ThemeContext } from "./lib/hooks/themeContext";

function App() {
  const { activeQuote, handler: quoteHandler } = React.useContext(
    QuoteContext
  ) as TQuoteContext;
  const { styles, handler: colorHandler } = React.useContext(
    ThemeContext
  ) as ThemeContext;

  const onGenerateNewQuote = () => {
    quoteHandler.onQuoteChanges();
    colorHandler.onColorChanges();
  };

  return (
    <main
      id="main-container"
      className="w-full h-screen flex flex-col gap-4 items-center justify-center transition-colors duration-300 ease-in-out"
      style={styles}
    >
      <QuoteBox>
        <QuoteText quote={activeQuote} />
        <div className="w-full inline-flex justify-between">
          <QuoteShareButtons quote={activeQuote} />
          <QuoteGenerateButton onClick={onGenerateNewQuote} />
        </div>
      </QuoteBox>

      <p className="text-sm text-white">
        Made with ♥ by{" "}
        <span className="underline font-bold">
          <a href="https://twitter.com/oirioir" target="_blank">
            Rio
          </a>
        </span>
      </p>
    </main>
  );
}

export default App;

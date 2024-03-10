type TQuoteContext = {
  activeQuote: TQuote;
  handler: {
    onQuoteChanges: () => void;
  };
};

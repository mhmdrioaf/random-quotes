export const INTENTS = {
  twitter: (quote: TQuote) => {
    const twitterIntent =
      "https://twitter.com/intent/tweet?hashtags=quotes&related=oirioir&";
    const text = encodeURIComponent(
      `"${quote.text}" - ${quote.author}, ${quote.year}`
    );
    return `${twitterIntent}text=${text}`;
  },
};

export const QUOTES: TQuote[] = [
  {
    id: 1,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    year: 2005,
  },
  {
    id: 2,
    text: "No matter what people tell you, words and ideas can change the world.",
    author: "Robin Williams",
    year: 1989,
  },
  {
    id: 3,
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    year: 1965,
  },
];

export const COLORS: string[] = ["#8A0000", "#004D00", "#38004D"];

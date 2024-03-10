export default function QuoteText({ quote }: { quote: TQuote }) {
  return (
    <div className="w-full flex flex-col gap-2">
      <h3
        id="text"
        className="text-2xl md:text-3xl lg:text-4xl font-quotes text-center"
      >
        <span className="text-4xl md:text-6xl lg:text-8xl">"</span>
        {quote.text}
      </h3>

      <p id="author" className="text-xs md:text-sm lg:text-base text-right">
        - {quote.author}, {quote.year}
      </p>
    </div>
  );
}

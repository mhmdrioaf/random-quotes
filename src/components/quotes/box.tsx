export default function QuoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="quote-box"
      className="w-[300px] md:w-1/3 lg:w-1/2 flex flex-col gap-4 items-center justify-center px-4 py-2 rounded-md bg-white"
    >
      {children}
    </div>
  );
}

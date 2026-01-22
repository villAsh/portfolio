const BottomFade = () => {
  return (
    <div className="pointer-events-none fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-16 z-50">
      <div
        className="absolute inset-0 bg-linear-to-t from-white via-white/80 to-transparent opacity-100 dark:opacity-0 transition-opacity duration-700"
      />

      <div
        className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent opacity-0 dark:opacity-100 transition-opacity duration-700"
      />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-24 bg-neutral-200/40 blur-3xl rounded-full opacity-100 dark:opacity-0 transition-opacity duration-700"
      />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-24 bg-white/5 blur-3xl rounded-full opacity-0 dark:opacity-100 transition-opacity duration-700"
      />
    </div>
  );
};

export default BottomFade;

const BottomFade = () => {
  return (
    <div className="pointer-events-none fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-10 z-50">
      <div
        className="absolute inset-0 bg-linear-to-t 
          from-background via-background/80 to-transparent transition-colors duration-500 transform"
      />

      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 
          w-[85%] h-24 bg-neutral-200/40 dark:bg-white/5 
          blur-3xl rounded-full transition-colors duration-500 transform"
      />
    </div>
  );
};

export default BottomFade;

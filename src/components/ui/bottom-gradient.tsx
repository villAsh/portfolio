export const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-0 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-red-200 to-transparent opacity-0 blur-xs transition duration-500 group-hover/btn:opacity-100 " />
    </>
  );
};

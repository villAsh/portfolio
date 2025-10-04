import ThemeToggleButton from "../ui/theme-toggle";

const GridTheme = () => {
  return (
    <div className="border-4 w-full min-w-2xs px-4 py-2 rounded-xl h-full p-1">
      <h1 className="text-5xl font-bold uppercase">Theme</h1>
      <ThemeToggleButton
        variant="gif"
        start="top-right"
        url="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjI4ZGwzdDJlcjdoNTlteWtlajdhZW1lb2gxMmc5MzhhaHM4ZzluayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SaSAUwiGPsPtswfPRk/giphy.gif"
      />
    </div>
  );
};

export default GridTheme;

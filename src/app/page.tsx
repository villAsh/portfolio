import ThemeToggleButton from "@/components/ui/theme-toggle";
import { ThemeProvider } from "@/providers/theme-provider";

export default function Home() {
  return (
    <ThemeProvider
      defaultTheme="system"
      attribute={"class"}
      enableSystem
      disableTransitionOnChange
    >
      <div className="w-screen h-screen flex items-center justify-center">
        <h1 className="font-satoshi">Portfolio</h1>
        <ThemeToggleButton
          variant="gif"
          url="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjI4ZGwzdDJlcjdoNTlteWtlajdhZW1lb2gxMmc5MzhhaHM4ZzluayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SaSAUwiGPsPtswfPRk/giphy.gif"
        />
      </div>
    </ThemeProvider>
  );
}

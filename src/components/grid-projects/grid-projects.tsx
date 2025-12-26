import { TEXT_GRADIENT } from "@/lib/classes";
import { cn } from "@/lib/utils";

const GridProject = () => {
  return (
    <div className="border-4 min-w-2xs px-4 py-2 rounded-sm p-1 h-full w-full">
      <h1 className={cn("text-4xl font-bold uppercase", TEXT_GRADIENT)}>Projects</h1>
    </div>
  );
};

export default GridProject;

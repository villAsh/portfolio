import type { ReactNode } from "react";
import StarRating from "@/components/labs/component-star-rating";


export type LabComponent = {
  id: string;
  name: string;
  description: string;
  registryCommand: string;
  preview: ReactNode;
  complexity: "simple" | "medium" | "complex";
  isNew?: boolean;
};

export const LAB_COMPONENTS: LabComponent[] = [
  {
    id: "star-rating",
    name: "Star Rating",
    description:
      "An interactive star rating component with smooth hover and selection animations.",    registryCommand: "npx shadcn@latest add https://vilaschauvhan.vercel.app/r/star-rating",
    preview: <StarRating />,
    complexity: "simple",
    isNew: true,
  },
];

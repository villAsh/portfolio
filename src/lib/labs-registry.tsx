import type { ReactNode } from "react";
import StarRating from "@/components/labs/component-star-rating";

export type LabComponentTag =
  | "animation"
  | "button"
  | "card"
  | "input"
  | "text"
  | "interaction"
  | "hover"
  | "list";

export type LabComponent = {
  id: string;
  name: string;
  description: string;
  tags: LabComponentTag[];
  registryCommand: string;
  preview: ReactNode;
  complexity: "simple" | "medium" | "complex";
  isNew?: boolean;
};

export const LAB_COMPONENTS: LabComponent[] = [
  {
    id: "star-rating",
    name: "Star Rating",
    description: "An interactive star rating component with smooth hover and selection animations.",
    tags: ["interaction", "input", "animation"],
    registryCommand: "npx shadcn@latest add https://villash.dev/r/star-rating",
    preview: <StarRating />,
    complexity: "simple",
    isNew: true,
  },
];

export const ALL_TAGS: { label: string; value: LabComponentTag | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Animation", value: "animation" },
  { label: "Button", value: "button" },
  { label: "Card", value: "card" },
  { label: "Input", value: "input" },
  { label: "Text", value: "text" },
  { label: "Interaction", value: "interaction" },
  { label: "Hover", value: "hover" },
  { label: "List", value: "list" },
];

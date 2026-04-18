"use client";

import { AnimatePresence } from "motion/react";
import { LAB_COMPONENTS } from "@/lib/labs-registry";
import { ComponentCard } from "../labs/component-card";

const ExploreComponents = () => {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      {LAB_COMPONENTS.map((component, idx) => (
        <ComponentCard key={component.id} component={component} index={idx} />
      ))}
    </AnimatePresence>
  );
};

export default ExploreComponents;

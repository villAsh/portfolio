import { EXPERIENCE } from "@/lib/data";
import ExperienceCard from "./experience-card";

const Experience = () => {
  return EXPERIENCE.map((exp, index) => (
    <div key={`${exp.organization}-${index + 1}`}>
      <ExperienceCard {...exp} />
    </div>
  ));
};

export default Experience;

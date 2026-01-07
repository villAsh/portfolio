import { EXPERIENCE } from "@/lib/data";
import Image from "next/image";
import { LinkPreview } from "../ui/link-preview";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export type TExperienceCard = {
  organization: string;
  img: string;
  url: string;
  position: string;
  start: string;
  end: string;
  location: string;
  description: string[];
  isWorking?: boolean;
  linkedIn: string;
  instagram: string;
};

const WorkingBadge = () => {
  return (
    <div className="bg-green-100/60 w-fit px-3 py-1 rounded-[8px] flex flex-row items-center justify-center gap-x-1 dark:bg-green-950 transform transition-colors duration-500">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse dark:bg-green-600 transform transition-colors duration-500" />
      <span className="text-xs font-normal text-neutral-700 tracking-wide dark:text-neutral-200 transform transition-colors duration-300">
        Working
      </span>
    </div>
  );
};

const ExperienceCard = ({
  organization,
  position,
  start,
  end,
  location,
  description,
  img,
  url,
  instagram,
  linkedIn,
  isWorking = false,
}: TExperienceCard) => {
  return (
    <Accordion type="multiple">
      <AccordionItem value={position}>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-row items-center justify-start gap-x-2">
              <div className="p-1 w-14 h-14 flex items-center rounded-[8px] justify-center bg-[#01848A]">
                <Image src={img} alt={organization} width={100} height={100} />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-start gap-x-2">
                  <h1 className="text-lg text-neutral-700 font-semibold dark:text-neutral-200">
                    {organization}
                  </h1>
                  {isWorking && <WorkingBadge />}
                </div>
                <div className="flex flex-row items-center justify-start gap-x-2">
                  <span className="text-[14px] text-neutral-400 font-medium dark:text-neutral-500">
                    {position}
                  </span>
                  <a href={instagram}>
                    <Image
                      src={"/instagram.svg"}
                      width={20}
                      height={20}
                      alt="instagram"
                      className="dark:invert"
                    />
                  </a>
                  <a href={linkedIn}>
                    <Image
                      src={"/linkedin.svg"}
                      width={20}
                      height={20}
                      alt="linkedin"
                      className="dark:invert"
                    />
                  </a>
                  <LinkPreview url={url}>
                    <Image
                      src={"/web.svg"}
                      width={18}
                      height={18}
                      alt="website"
                      className="dark:invert"
                    />
                  </LinkPreview>
                  <AccordionTrigger className="p-0" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-0 text-neutral-400 text-base font-normal">
              <span>
                {start} {"－"} {end}
              </span>
              <span>{location}</span>
            </div>
          </div>
          <AccordionContent>
            <div className="">
              <h6 className="text-neutral-700 font-[550] dark:text-neutral-200 tracking-wide">
                Description
              </h6>
              <ul className="list-disc px-4 text-neutral-400 leading-6 text-base font-medium mt-3">
                {description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

const Experience = () => {
  return (
    <section className="mt-10 max-w-2xl mx-auto w-full">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-200">
        Experience
      </h1>
      <div className="my-3 flex flex-col gap-y-8">
        {EXPERIENCE.map((exp, index) => (
          <ExperienceCard key={`${exp.organization}-${index + 1}`} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;

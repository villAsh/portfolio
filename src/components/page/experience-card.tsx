import { type TExperienceCard, WorkingBadge } from "../sections/experience";
import Image from "next/image";
import { LinkPreview } from "../ui/link-preview";

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
    <div className="flex flex-col gap-y-6">
      <div className="flex flex-row items-start justify-between max-md:flex-col max-md:gap-y-2">
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
            <div className="flex flex-row items-center justify-start gap-x-2 max-md:items-start">
              <span className="text-[14px] text-neutral-400 font-medium dark:text-neutral-500">
                {position}
              </span>
              <div className="flex flex-row items-center justify-center gap-x-2">
                <a href={instagram} target="_blank" className="cursor-pointer">
                  <Image
                    src={"/instagram.svg"}
                    width={20}
                    height={20}
                    alt="instagram"
                    className="dark:invert"
                  />
                </a>
                <a href={linkedIn} target="_blank" className="cursor-pointer">
                  <Image
                    src={"/linkedin.svg"}
                    width={18}
                    height={18}
                    alt="linkedin"
                    className="dark:invert"
                  />
                </a>
                <LinkPreview url={url} className="cursor-pointer">
                  <Image
                    src={"/web.svg"}
                    width={18}
                    height={18}
                    alt="website"
                    className="dark:invert"
                  />
                </LinkPreview>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-0 text-neutral-400 text-base font-normal text-right max-md:text-left">
          <span>
            {start} {"－"} {end}
          </span>
          <span>{location}</span>
        </div>
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default ExperienceCard;

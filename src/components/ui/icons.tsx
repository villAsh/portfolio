"use client";
import { motion, type SVGMotionProps } from "motion/react";

export const Moon = ({ ...props }: SVGMotionProps<SVGElement>) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-moon-stars"
      {...props}
    >
      <motion.path
        initial={{
          opacity: 0.3,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
        }}
        stroke="none"
        d="M0 0h24v24H0z"
        fill="none"
      />
      <motion.path
        initial={{
          opacity: 0.3,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
        }}
        transition={{
          duration: 0.73,
          ease: "easeOut",
        }}
        d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008"
      />
      <motion.path
        initial={{
          opacity: 0.3,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
        }}
        d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"
      />
      <motion.path
        initial={{
          opacity: 0.3,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
        }}
        d="M19 11h2m-1 -1v2"
      />
    </motion.svg>
  );
};

export const Sun = ({ ...props }: SVGMotionProps<SVGElement>) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-sun-high"
      {...props}
    >
      <motion.path
        initial={{
          opacity: 0.3,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
          transition: { delay: 0.5 },
        }}
        stroke="none"
        d="M0 0h24v24H0z"
        fill="none"
      />
      <motion.path
        initial={{
          opacity: 0.3,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
          transition: { delay: 0.5 },
        }}
        d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656"
      />
      <motion.path
        initial={{
          opacity: 0.3,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
          transition: { delay: 0.5 },
        }}
        d="M6.343 17.657l-1.414 1.414"
      />
      <motion.path
        initial={{
          opacity: 0.3,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
          transition: { delay: 0.5 },
        }}
        d="M6.343 6.343l-1.414 -1.414"
      />
      <motion.path
        initial={{
          opacity: 0.3,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
          transition: { delay: 0.5 },
        }}
        d="M17.657 6.343l1.414 -1.414"
      />
      <motion.path
        initial={{
          opacity: 0.3,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
          transition: { delay: 0.5 },
        }}
        d="M17.657 17.657l1.414 1.414"
      />
      <motion.path
        initial={{
          opacity: 0.3,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
          transition: { delay: 0.5 },
        }}
        d="M4 12h-2"
      />
      <motion.path
        initial={{
          opacity: 0.3,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
          transition: { delay: 0.5 },
        }}
        d="M12 4v-2"
      />
      <motion.path
        initial={{
          opacity: 0.3,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
          transition: { delay: 0.5 },
        }}
        d="M20 12h2"
      />
      <motion.path
        initial={{
          opacity: 0.3,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
          transition: { delay: 0.5 },
        }}
        d="M12 20v2"
      />
    </motion.svg>
  );
};

export const CV = ({ ...props }: SVGMotionProps<SVGElement>) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-file-cv"
      {...props}
    >
      <motion.path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <motion.path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <motion.path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2" />
      <motion.path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
      <motion.path d="M13 11l1.5 6l1.5 -6" />
    </motion.svg>
  );
};

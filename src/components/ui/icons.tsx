"use client";
import { motion, type Variants } from "motion/react";
import { ClassNameValue } from "tailwind-merge";

const svgVariants: Variants = {
  hidden: { opacity: 1, scale: 0, rotateX: -90 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 150,
      duration: 0.6,
      delay: 1.6,
    },
  },
};

const pathVariants: Variants = {
  hidden: { opacity: 1, pathLength: 0, pathOffset: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      delay: 1.8,
    },
  },
};

const clipRectVariants: Variants = {
  hidden: {
    width: 0,
    x: 0,
  },
  visible: {
    width: 48,
    x: 0,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 180,
      duration: 0.8,
      delay: 0.6,
    },
  },
};

export const Github = () => {
  return (
    <a href="https://github.com/villAsh" target="_blank" rel="noopener">
      <motion.svg
        width="64"
        height="64"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xlinkTitle={"github"}
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        className={"p-2 border rounded-[12px] hover:cursor-pointer"}
      >
        <motion.g clipPath="url(#clip0_910_21)">
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariants}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.0199 0C10.7375 0 0 10.8167 0 24.1983C0 34.895 6.87988 43.9495 16.4241 47.1542C17.6174 47.3951 18.0545 46.6335 18.0545 45.9929C18.0545 45.4319 18.0151 43.509 18.0151 41.5055C11.3334 42.948 9.94198 38.6209 9.94198 38.6209C8.86818 35.8164 7.27715 35.0956 7.27715 35.0956C5.09022 33.6132 7.43645 33.6132 7.43645 33.6132C9.86233 33.7735 11.1353 36.0971 11.1353 36.0971C13.2824 39.7827 16.7422 38.7413 18.1341 38.1002C18.3328 36.5377 18.9695 35.456 19.6455 34.8552C14.3163 34.2942 8.70937 32.211 8.70937 22.9161C8.70937 20.2719 9.66321 18.1086 11.1746 16.4261C10.9361 15.8253 10.1008 13.3409 11.4135 10.0157C11.4135 10.0157 13.4417 9.3746 18.0146 12.4996C19.9725 11.9699 21.9916 11.7005 24.0199 11.6982C26.048 11.6982 28.1154 11.979 30.0246 12.4996C34.5981 9.3746 36.6262 10.0157 36.6262 10.0157C37.9389 13.3409 37.1031 15.8253 36.8646 16.4261C38.4158 18.1086 39.3303 20.2719 39.3303 22.9161C39.3303 32.211 33.7234 34.2539 28.3544 34.8552C29.2296 35.6163 29.9848 37.0583 29.9848 39.3421C29.9848 42.5871 29.9454 45.1915 29.9454 45.9924C29.9454 46.6335 30.383 47.3951 31.5758 47.1547C41.12 43.9491 47.9999 34.895 47.9999 24.1983C48.0392 10.8167 37.2624 0 24.0199 0Z"
            className={"fill-black dark:fill-white"}
          />
        </motion.g>
        <defs>
          <clipPath id="clip0_910_21">
            <motion.rect
              variants={clipRectVariants}
              initial="hidden"
              animate="visible"
              width="48"
              height="48"
              fill="white"
            />
          </clipPath>
        </defs>
      </motion.svg>
    </a>
  );
};

export const Gmail = () => {
  return (
    <a href="mailto:chavhanvilas02@gmail.com">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="64"
        height="64"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        className={"p-2 border rounded-[12px] hover:cursor-pointer"}
      >
        <motion.path
          className={"fill-black dark:fill-white"}
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
        />
        <motion.path
          className={"fill-black dark:fill-white"}
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
        />
        <motion.polygon
          variants={pathVariants}
          className={"fill-black dark:fill-white"}
          initial="hidden"
          animate="visible"
          points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
        />
        <motion.path
          className={"fill-black dark:fill-white"}
          variants={pathVariants}
          initial="hidden"
          d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
        />
        <motion.path
          className={"fill-black dark:fill-white"}
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
        />
      </motion.svg>
    </a>
  );
};

export const LinkedIn = () => {
  return (
    <a
      href="https://www.linkedin.com/in/vilas-chauvhan-4609391aa/"
      target="_blank"
      rel="noopener"
    >
      <motion.svg
        width="64"
        height="64"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        className={"p-2.5 border rounded-[12px] hover:cursor-pointer"}
      >
        <motion.g clipPath="url(#clip0_17_32)">
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M44.4567 0H3.54333C2.60358 0 1.70232 0.373315 1.03782 1.03782C0.373315 1.70232 0 2.60358 0 3.54333V44.4567C0 45.3964 0.373315 46.2977 1.03782 46.9622C1.70232 47.6267 2.60358 48 3.54333 48H44.4567C45.3964 48 46.2977 47.6267 46.9622 46.9622C47.6267 46.2977 48 45.3964 48 44.4567V3.54333C48 2.60358 47.6267 1.70232 46.9622 1.03782C46.2977 0.373315 45.3964 0 44.4567 0ZM14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z"
            className={"fill-black dark:fill-white"}
          />
        </motion.g>
        <defs>
          <clipPath id="clip0_17_32">
            <motion.rect
              variants={clipRectVariants}
              initial="hidden"
              animate="visible"
              width="48"
              height="48"
              fill="white"
            />
          </clipPath>
        </defs>
      </motion.svg>
    </a>
  );
};

export const PeerList = () => {
  return (
    <a href="https://peerlist.io/vilaschauvhan" target="_blank" rel="noopener">
      <motion.svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        className={"p-2.5 border rounded-[12px] hover:cursor-pointer"}
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M12 0C2.667 0 0 2.667 0 12s2.673 12 12 12 12 -2.667 12 -12S21.327 0 12 0zm8.892 20.894c-1.57 1.569 -4.247 2.249 -8.892 2.249s-7.322 -0.68 -8.892 -2.25C1.735 19.522 1.041 17.3 0.89 13.654A39.74 39.74 0 0 1 0.857 12c0 -1.162 0.043 -2.201 0.13 -3.13 0.177 -1.859 0.537 -3.278 1.106 -4.366 0.284 -0.544 0.62 -1.006 1.013 -1.398s0.854 -0.729 1.398 -1.013C5.592 1.524 7.01 1.164 8.87 0.988 9.799 0.9 10.838 0.858 12 0.858c4.645 0 7.322 0.68 8.892 2.248 1.569 1.569 2.25 4.246 2.25 8.894s-0.681 7.325 -2.25 8.894zM20.538 3.46C19.064 1.986 16.51 1.357 12 1.357c-4.513 0 -7.067 0.629 -8.54 2.103C1.986 4.933 1.357 7.487 1.357 12c0 4.511 0.63 7.065 2.105 8.54C4.936 22.014 7.49 22.643 12 22.643s7.064 -0.629 8.538 -2.103c1.475 -1.475 2.105 -4.029 2.105 -8.54s-0.63 -7.065 -2.105 -8.54zM14.25 16.49a6.097 6.097 0 0 1 -2.442 0.59v2.706H10.45v0.357H6.429V5.57h0.357V4.214h5.676c3.565 0 6.467 2.81 6.467 6.262 0 2.852 -1.981 5.26 -4.68 6.013zm-1.788 -8.728H10.45v5.428h2.011c1.532 0 2.802 -1.2 2.802 -2.714s-1.27 -2.714 -2.802 -2.714zm0.901 4.351c0.117 -0.239 0.186 -0.502 0.186 -0.78 0 -1.01 -0.855 -1.857 -1.945 -1.857h-0.296V8.62h1.154c1.09 0 1.945 0.847 1.945 1.857 0 0.705 -0.422 1.323 -1.044 1.637zm4.104 1.493c0.043 -0.063 0.083 -0.129 0.123 -0.194a5.653 5.653 0 0 0 0.526 -1.103 5.56 5.56 0 0 0 0.11 -0.362c0.02 -0.076 0.042 -0.15 0.06 -0.227a5.58 5.58 0 0 0 0.073 -0.41c0.01 -0.068 0.025 -0.134 0.032 -0.203 0.024 -0.207 0.038 -0.417 0.038 -0.63 0 -3.198 -2.687 -5.763 -5.967 -5.763H7.286v14.572h4.022v-3.048h1.154c1.43 0 2.747 -0.488 3.778 -1.303a5.92 5.92 0 0 0 0.46 -0.406c0.035 -0.034 0.066 -0.07 0.1 -0.105 0.107 -0.11 0.21 -0.22 0.308 -0.337 0.044 -0.053 0.084 -0.108 0.126 -0.162 0.081 -0.104 0.16 -0.21 0.233 -0.319zm-5.005 1.775H10.45v3.048H8.143V5.57h4.319c2.837 0 5.11 2.211 5.11 4.905s-2.273 4.905 -5.11 4.905z"
          strokeWidth="1"
          className={"fill-black dark:fill-white"}
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>
    </a>
  );
};

export const XCOM = () => {
  return (
    <a href="https://x.com/vilas_dev_x" target="_blank" rel="noopener">
      <motion.svg
        width="64"
        height="64"
        className={"p-2.5 border rounded-[12px] hover:cursor-pointer"}
        viewBox="0 0 32 33"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        animate="visible"
        initial="hidden"
      >
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          variants={pathVariants}
          animate="visible"
          initial="hidden"
          d="M7.94353 8.6432C8.05038 8.43423 8.2653 8.30273 8.5 8.30273H12.6667C12.8674 8.30273 13.0558 8.39911 13.1733 8.5618L17.2867 14.2572L23.0581 8.48579C23.3021 8.24171 23.6979 8.24171 23.9419 8.48579C24.186 8.72987 24.186 9.1256 23.9419 9.36968L18.028 15.2836L24.0067 23.5618C24.1441 23.7521 24.1633 24.0033 24.0565 24.2123C23.9496 24.4212 23.7347 24.5527 23.5 24.5527H19.3333C19.1326 24.5527 18.9442 24.4564 18.8267 24.2937L14.7133 18.5983L8.94194 24.3697C8.69787 24.6138 8.30214 24.6138 8.05806 24.3697C7.81398 24.1256 7.81398 23.7299 8.05806 23.4858L13.972 17.5718L7.99333 9.29367C7.85591 9.10339 7.83668 8.85217 7.94353 8.6432ZM9.72235 9.55273L19.6529 23.3027H22.2777L12.3471 9.55273H9.72235Z"
          className={"fill-black dark:fill-white"}
        />
      </motion.svg>
    </a>
  );
};

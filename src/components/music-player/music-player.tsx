"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import { motion } from "motion/react";

type TStatus = "idle" | "loading" | "playing";
const Status = "inProgress";

const MusicPlayer = () => {
  const [play, setPlay] = useState(false);
  const [status, setStatus] = useState<TStatus>("idle");

  const getIcon = () => {
    switch (status) {
      case "idle":
        return "/play.svg";
      case "loading":
        return "/loading.svg";
      case "playing":
        return "/pause.svg";
      default:
        return "/play.svg";
    }
  };

  const handlePlay = () => {
    setStatus("loading");
    setTimeout(() => {
      setPlay(true);
      setStatus("playing");
    }, 2500);
  };

  return (
    <div className="mb-3 border p-3 flex flex-col gap-y-2 rounded-[8px] surface-inset border-black/10 dark:border-white/10 transition-colors duration-200 transform">
      {Status !== "inProgress" ? (
        <>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-start justify-start gap-x-2">
              <Image
                src={"/haseen-cover.jpeg"}
                width={60}
                height={60}
                alt="cover"
                className="rounded-[8px]"
              />
              <div className="flex flex-col gap-y-0.5">
                <div className="flex flex-row items-center justify-start gap-x-2">
                  <div className="w-fit p-1 rounded-[4px] bg-green-100 dark:bg-green-950 transform transition-colors duration-500">
                    <Image
                      src={"/spotify.svg"}
                      width={12}
                      height={12}
                      alt="spotify logo"
                    />
                  </div>
                  <span className="text-xs text-neutral-500 font-medium tracking-wide">
                    Last Played
                  </span>
                </div>
                <div className="flex flex-col mt-1">
                  <h6 className="text-sm font-medium">Haseen</h6>
                  <span className="text-xs text-neutral-400 font-medium tracking-wide">
                    by EP-Talwindar
                  </span>
                </div>
              </div>
            </div>
            <Button
              onClick={handlePlay}
              variant={"icon"}
              className="border rounded-[6px] px-2"
            >
              <Image
                src={getIcon()}
                width={18}
                height={18}
                alt="play"
                className={`${status === "loading" ? "animate-spin" : "animate-none"} dark:invert`}
              />
            </Button>
          </div>
          {play && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <hr className="border-neutral-200 dark:border-neutral-800 transition-colors transform duration-500 my-2" />
              <div>
                <div className="flex flex-col">
                  <h6 className="text-sm font-medium">Haseen</h6>
                  <span className="text-xs text-neutral-400 font-medium tracking-wide">
                    by EP-Talwindar
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </>
      ) : (
        <p className="p-4 text-base font-medium text-center">
          Something cool is on the way
        </p>
      )}
    </div>
  );
};

export default MusicPlayer;

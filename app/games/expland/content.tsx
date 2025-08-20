"use client";

import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export function ExplandPageContent() {
  const heroSection = useRef(null);
  const textSection = useRef(null);
  const { scrollYProgress: heroSectionScrollYProgress } = useScroll({
    target: heroSection,
    offset: ["0%", "50%"],
  });
  const { scrollYProgress: textSectionScrollYProgress } = useScroll({
    target: textSection,
    offset: ["-50%", "0%"],
  });
  const heroSectionOpacity = useTransform(
    heroSectionScrollYProgress,
    [0, 1],
    [1, 0],
  );
  const textSectionScale = useTransform(
    textSectionScrollYProgress,
    [0, 1],
    [0.9, 1],
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0 }}
      className="bg-black"
    >
      <motion.div
        className="w-full h-screen -z-10"
        ref={heroSection}
        style={{ opacity: heroSectionOpacity }}
      >
        <div className="h-[50%] w-full from-black to-transparent bg-gradient-to-t absolute bottom-0 left-0 z-10"></div>
        <div className="h-96 opacity-75 w-full from-black to-transparent bg-gradient-to-b absolute top-0 left-0 z-10"></div>
        <motion.div
          className="z-20 absolute bottom-10 left-[50%] translate-x-[-50%] flex items-center flex-col"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 3,
            delay: 1.5,
            ease: [0.165, 0.84, 0.44, 1.0],
          }}
        >
          <Image
            src="/assets/expland/textlogo_white.png"
            alt="Expland Logo"
            className="w-96"
            width={885}
            height={282}
          />
          <ChevronDown />
        </motion.div>
        <motion.video
          initial={{ opacity: 0, filter: "blur(30px)" }}
          animate={{ opacity: 1, filter: "blur(0)" }}
          transition={{ duration: 1, delay: 1.5 }}
          src="/assets/expland/gameplay.webm"
          className="w-full h-full object-cover absolute top-0 left-0"
          autoPlay
          muted
          loop
        />
      </motion.div>
      <motion.div
        className="w-full h-screen flex flex-col items-center justify-center text-2xl text-center p-2"
        ref={textSection}
      >
        <motion.div
          className="w-full max-w-lg"
          style={{
            opacity: textSectionScrollYProgress,
            scale: textSectionScale,
          }}
        >
          Face adversity, hardship, enjoy adventure as well, and discover a
          second chance to fix past mistakes and become a better person in a
          mysterious world with nightmares and happiness just around the corner.
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

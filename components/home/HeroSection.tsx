"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useAnimationConfig } from "@/lib/hooks/useAnimationConfig";

export function HeroSection() {
  const animations = useAnimationConfig();

  return (
    <div className="max-w-2xl w-full grid md:grid-cols-2 grid-cols-1 mx-auto gap-2">
      <motion.div
        className="self-center flex justify-center items-center bg-card rounded-md rounded-t-2xl md:rounded-tr-md p-5"
        {...animations.fadeInUp(0.1)}
      >
        <Image
          src="/logo-transparent.png"
          alt="Noe Co. Logo"
          className="max-w-52"
          width={500}
          height={305}
        />
      </motion.div>
      <motion.div
        className="self-center bg-card h-full flex justify-center items-center p-5 rounded-md md:rounded-tr-2xl"
        {...animations.fadeInUp(0.2)}
      >
        <h1 className="md:text-center text-4xl font-bold">
          Making indie games for everyone.
        </h1>
      </motion.div>
    </div>
  );
}
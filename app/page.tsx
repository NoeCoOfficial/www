"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="my-auto">
      <div className="max-w-2xl w-full grid md:grid-cols-2 grid-cols-1 mx-auto p-3 gap-10">
        <motion.div
          className="self-center flex justify-center items-center"
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: [0.165, 0.84, 0.44, 1.0], delay: 0.1 }}
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
          className="self-center"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: [0.165, 0.84, 0.44, 1.0], delay: 0.2 }}
        >
          <h1 className="text-center text-4xl font-bold">
            Making indie games for everyone.
          </h1>
        </motion.div>
      </div>
      <motion.div
        className="max-w-2xl w-full mx-auto mt-5 p-3"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.165, 0.84, 0.44, 1.0], delay: 0.3 }}
      >
        We are a partnership of two developers looking to find joy in making
        video games. Currently as of writing, we only have one game in
        development, called Expland, which we plan to be our first game to
        release to the public. We are putting our heart and soul into this game,
        and we hope you enjoy it when it comes out. Stay tuned!
      </motion.div>
    </div>
  );
}

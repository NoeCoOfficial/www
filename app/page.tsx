"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="my-auto py-5 flex flex-col gap-2 p-2">
      <div className="max-w-2xl w-full grid md:grid-cols-2 grid-cols-1 mx-auto gap-2">
        <motion.div
          className="self-center flex justify-center items-center bg-card rounded-md rounded-t-2xl md:rounded-tr-md p-5"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
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
          className="self-center bg-card h-full flex justify-center items-center p-5 rounded-md md:rounded-tr-2xl"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: [0.165, 0.84, 0.44, 1.0], delay: 0.2 }}
        >
          <h1 className="md:text-center text-4xl font-bold">
            Making indie games for everyone.
          </h1>
        </motion.div>
      </div>
      <motion.div
        className="max-w-2xl w-full mx-auto p-3 bg-card rounded-md rounded-b-2xl"
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

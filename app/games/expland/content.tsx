"use client";

import { motion } from "motion/react";

export function ExplandPageContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0 }}
      className="w-full h-screen bg-black -z-10"
    >
      <div className="h-[50%] w-full from-black to-transparent bg-gradient-to-t absolute bottom-0 left-0 z-10"></div>
      <div className="h-96 opacity-75 w-full from-black to-transparent bg-gradient-to-b absolute top-0 left-0 z-10"></div>
      <motion.video
        initial={{ opacity: 0, filter: "blur(30px)" }}
        animate={{ opacity: 1, filter: "blur(0)" }}
        transition={{ duration: 1, delay: 2 }}
        src="/assets/expland/gameplay.webm"
        className="w-full h-full object-cover absolute top-0 left-0"
        autoPlay
        muted
        loop
      />
    </motion.div>
  );
}

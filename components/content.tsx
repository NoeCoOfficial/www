"use client";
import { motion } from "motion/react";

export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="prose mt-15 mx-auto prose-custom max-w-5xl w-full p-2"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: [0.165, 0.84, 0.44, 1.0], delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

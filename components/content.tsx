"use client";
import { motion } from "motion/react";
import { useAnimationConfig } from "@/lib/hooks/useAnimationConfig";

export default function Content({ children }: { children: React.ReactNode }) {
  const animations = useAnimationConfig();

  return (
    <motion.div
      className="prose my-15 mx-auto prose-custom max-w-5xl w-full p-2"
      {...animations.fadeInUp(0.1)}
    >
      {children}
    </motion.div>
  );
}

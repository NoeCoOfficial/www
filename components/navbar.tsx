"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: [0.165, 0.84, 0.44, 1.0] }}
      className="container mx-auto p-3 px-5 font-bold text-md flex flex-row gap-5"
    >
      <Link href="/">Noe Co.</Link>
      <div className="grow"></div>
      <Link href="/">Home</Link>
      <Link href="/games">Games</Link>
      <Link href="/about">About</Link>
      <Link href="/privacy">Privacy</Link>
    </motion.div>
  );
}

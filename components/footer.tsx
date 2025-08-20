"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function Footer() {
  return (
    <motion.footer
      className="p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: [0.165, 0.84, 0.44, 1.0] }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          &copy; {new Date().getFullYear()} Noe Co. Website by{" "}
          <Link href="https://ingo.au/" target="_blank" className="underline">
            Ingo
          </Link>
          .
        </div>
        <div className="flex flex-row gap-2 justify-end [&>a]:underline">
          <Link href="/about">About</Link>
          <Link href="https://github.com/NoeCoOfficial">Github</Link>
          <Link href="https://discord.gg/QNgcKCAJn3">Discord</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </motion.footer>
  );
}

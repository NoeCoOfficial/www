"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function Footer() {
  return (
    <motion.footer
      className="mt-10 border-t border-dashed p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: [0.165, 0.84, 0.44, 1.0] }}
    >
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Noe Co. Website by{" "}
          <Link href="https://ingo.au/" target="_blank" className="underline">
            Ingo
          </Link>
          .
        </p>
      </div>
    </motion.footer>
  );
}

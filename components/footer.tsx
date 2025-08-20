"use client";

import Link from "next/link";
import { motion } from "motion/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDiscord,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <motion.footer
      className="p-4 border-t border-dashed"
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
        <div className="flex gap-2 justify-end md:flex-row flex-col">
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="mailto:contact@noeco.xyz">contact@noeco.xyz</Link>
          <div className="flex flex-row gap-2">
            <Link href="https://github.com/NoeCoOfficial">
              <span className="sr-only">Github</span>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link href="https://discord.gg/QNgcKCAJn3" target="_blank">
              <span className="sr-only">Discord</span>
              <FontAwesomeIcon icon={faDiscord} />
            </Link>
            <Link
              href="https://www.youtube.com/@noeco.official"
              target="_blank"
            >
              <span className="sr-only">YouTube</span>
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

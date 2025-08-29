"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="my-auto flex flex-col gap-2 p-2 py-12">
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
            Indie games made with heart.
          </h1>
        </motion.div>
      </div>
      <motion.div
        className="max-w-2xl w-full mx-auto p-3 bg-card rounded-md rounded-b-2xl flex flex-col gap-2"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.165, 0.84, 0.44, 1.0], delay: 0.3 }}
      >
        We’re Noe Co., a small indie team passionate about creating meaningful
        and memorable games. Right now, we’re developing our debut title, Expland; a low-poly sandbox 
        adventure inspired by creativity, exploration, and discovery. This is just the beginning 
        of our journey, and we can’t wait to share more as we bring our
        ideas to life. Follow along and be part of the story!
        <br />
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: [0.165, 0.84, 0.44, 1.0], delay: 0.4 }}
          className="flex w-full md:justify-end gap-2 md:flex-row flex-col"
        >
          <Button asChild variant="ghost">
            <Link href="/games">
              Games <ChevronRight />
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/about">
              About <ChevronRight />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

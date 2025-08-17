"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import Image from "next/image";

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
      <Link href="/" className="hidden md:inline">
        Home
      </Link>
      <Link href="/games" className="hidden md:inline">
        Games
      </Link>
      <Link href="/about" className="hidden md:inline">
        About
      </Link>
      <Link href="/privacy" className="hidden md:inline">
        Privacy
      </Link>
      <Drawer direction="right">
        <DrawerTrigger className="md:hidden">Menu</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="sr-only">
            <DrawerTitle>Menu</DrawerTitle>
          </DrawerHeader>
          <div className="text-xl font-bold flex flex-col justify-center">
            <Link href="/" className="p-4">
              <Image
                src="/logo-transparent.png"
                alt="Noe Co. Logo"
                className="max-w-52"
                width={500}
                height={305}
              />
            </Link>
            <Link href="/" className="p-4">
              Home
            </Link>
            <Link href="/games" className="p-4">
              Games
            </Link>
            <Link href="/about" className="p-4">
              About
            </Link>
            <Link href="/privacy" className="p-4">
              Privacy
            </Link>
          </div>
        </DrawerContent>
      </Drawer>
    </motion.div>
  );
}

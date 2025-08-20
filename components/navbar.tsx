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
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", target: "_self" },
  { href: "/games", label: "Games", target: "_self" },
  { href: "/about", label: "About", target: "_self" },
  { href: "/privacy", label: "Privacy", target: "_self" },
  {
    href: "https://github.com/noecoofficial",
    label: "GitHub",
    target: "_blank",
  },
  {
    href: "https://discord.gg/QNgcKCAJn3",
    label: "Discord",
    target: "_blank",
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 w-full bg-background/25 backdrop-blur-2xl z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: [0.165, 0.84, 0.44, 1.0] }}
      >
        <div className="container mx-auto p-3 px-5 font-bold text-md flex flex-row gap-5">
          <Link href="/">Noe Co.</Link>
          <div className="grow"></div>
          {navItems.map((item, index) => (
            <Link
              href={item.href}
              className="hidden md:inline"
              target={item.target}
              key={index}
            >
              <motion.span
                initial={{
                  color:
                    pathname.startsWith(item.href) &&
                    !(item.href == "/" && pathname !== item.href)
                      ? "var(--primary)"
                      : "var(--muted)",
                }}
                animate={{
                  color:
                    pathname.startsWith(item.href) &&
                    !(item.href == "/" && pathname !== item.href)
                      ? "var(--primary)"
                      : "var(--muted)",
                }}
                whileHover={{
                  color: "var(--foreground)",
                }}
              >
                {item.label}
              </motion.span>
            </Link>
          ))}
          <Drawer
            direction="right"
            open={mobileMenuOpen}
            onOpenChange={setMobileMenuOpen}
          >
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

                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="p-4"
                    target={item.target}
                  >
                    <motion.span
                      animate={{
                        color:
                          pathname.startsWith(item.href) &&
                          item.href !== "/" &&
                          pathname !== item.href
                            ? "var(--primary)"
                            : "var(--muted)",
                      }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </motion.nav>
    </>
  );
}

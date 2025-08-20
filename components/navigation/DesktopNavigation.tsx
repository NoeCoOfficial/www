"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { NavItem } from "@/lib/config/navigation";

interface DesktopNavigationProps {
  items: NavItem[];
}

export function DesktopNavigation({ items }: DesktopNavigationProps) {
  const pathname = usePathname();

  return (
    <>
      {items.map((item, index) => (
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
    </>
  );
}
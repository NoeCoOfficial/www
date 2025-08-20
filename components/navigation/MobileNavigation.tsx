"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { NavItem } from "@/lib/config/navigation";

interface MobileNavigationProps {
  items: NavItem[];
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNavigation({
  items,
  isOpen,
  onOpenChange,
}: MobileNavigationProps) {
  const pathname = usePathname();

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={onOpenChange}>
      <DrawerTrigger className="md:hidden">Menu</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="sr-only">
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>
        <div className="text-xl font-bold flex flex-col justify-center">
          <Link
            href="/"
            className="p-4"
            onClick={() => onOpenChange(false)}
          >
            <Image
              src="/logo-transparent.png"
              alt="Noe Co. Logo"
              className="max-w-52"
              width={500}
              height={305}
            />
          </Link>

          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="p-4"
              target={item.target}
              onClick={() => onOpenChange(false)}
            >
              <motion.span
                animate={{
                  color:
                    pathname.startsWith(item.href) &&
                    !(item.href == "/" && pathname !== item.href)
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
  );
}
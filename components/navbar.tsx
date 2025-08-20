"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { navigationItems } from "@/lib/config/navigation";
import { useMobileMenu } from "@/lib/hooks/useMobileMenu";
import { useAnimationConfig } from "@/lib/hooks/useAnimationConfig";
import { DesktopNavigation } from "@/components/navigation/DesktopNavigation";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";

export function Navbar() {
  const mobileMenu = useMobileMenu();
  const animations = useAnimationConfig();

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 w-full bg-background/25 backdrop-blur-2xl z-50"
        {...animations.fadeInDown()}
      >
        <div className="container mx-auto p-3 px-5 font-bold text-md flex flex-row gap-5">
          <Link href="/">Noe Co.</Link>
          <div className="grow"></div>
          <DesktopNavigation items={navigationItems} />
          <MobileNavigation
            items={navigationItems}
            isOpen={mobileMenu.isOpen}
            onOpenChange={mobileMenu.setIsOpen}
          />
        </div>
      </motion.nav>
    </>
  );
}

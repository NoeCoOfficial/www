"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useAnimationConfig } from "@/lib/hooks/useAnimationConfig";

export function IntroductionSection() {
  const animations = useAnimationConfig();

  return (
    <motion.div
      className="max-w-2xl w-full mx-auto p-3 bg-card rounded-md rounded-b-2xl flex flex-col gap-2"
      {...animations.fadeInUp(0.3)}
    >
      We are a partnership of two developers looking to find joy in making
      video games. Currently, as of writing, we only have one game in
      development, called Expland, which we plan to be our first game to
      release to the public. We are putting our heart and soul into this game,
      and we hope you enjoy it when it comes out. Stay tuned!
      <br />
      <motion.div
        {...animations.fadeInLeft(0.4)}
        className="flex w-full md:justify-end gap-2 md:flex-row flex-col"
      >
        <Button asChild variant="ghost">
          <Link href="/games">
            Games <ChevronRight />
          </Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="/about">
            More <ChevronRight />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
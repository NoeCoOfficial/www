"use client";

import { Button } from "@/components/ui/button";
import { Game } from "@/lib/interfaces";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export function GameComponent({ game, index }: { game: Game; index: number }) {
  return (
    <motion.div
      className="w-full grid md:grid-cols-2 gap-4"
      key={game.name}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: [0.165, 0.84, 0.44, 1.0], delay: 0.1 + index * 0.1 }}
    >
      <div className="w-full h-full bg-neutral-500 aspect-video rounded"></div>
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl">{game.name}</h2>
        <p className="text-xl">{game.description}</p>
        <div className="grow"></div>
        <div className="flex flex-row flex-wrap gap-2">
          {game.buttons}
          <Button variant="outline" asChild>
            <Link href={game.url}>
              More <ChevronRight />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

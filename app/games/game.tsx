"use client";

import { Button } from "@/components/ui/button";
import { Game } from "@/lib/interfaces";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useAnimationConfig } from "@/lib/hooks/useAnimationConfig";

export function GameComponent({ game, index }: { game: Game; index: number }) {
  const animations = useAnimationConfig();

  return (
    <motion.div
      className="w-full grid md:grid-cols-2 gap-4"
      key={game.name}
      {...animations.fadeInUp(animations.staggerDelay(index))}
    >
      <Image
        src={game.image.src}
        alt={game.name}
        width={game.image.width}
        height={game.image.height}
        className="w-full h-full aspect-video rounded object-cover"
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl">{game.name}</h2>
        <p className="text-xl">{game.description}</p>
        <div className="grow"></div>
        <div className="flex flex-row flex-wrap gap-2">
          {game.downloadUrl && (
            <Button asChild>
              <Link href={game.downloadUrl} target="_blank">
                Download
              </Link>
            </Button>
          )}
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

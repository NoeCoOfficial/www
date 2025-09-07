import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Game } from "@/lib/interfaces";
import { GameComponent } from "./game";

import Link from "next/link";
import NewsletterBox from "@/components/newsletter";

export const metadata: Metadata = {
  title: "Games",
  description:
    "We are a partnership of two developers looking to find joy in making video games",
};

const games: Game[] = [
  {
    name: "Expland",
    description:
      "Face adversity, hardship, enjoy adventure as well, and discover a second chance to fix past mistakes and become a better person in a mysterious world with nightmares and happiness just around the corner.",
    image: { src: "/assets/expland/thumbnail.png", width: 1920, height: 1080 },
    url: "/games/expland",
    buttons: (
      <>
        <Button asChild>
          <Link
            href="https://github.com/NoeCoOfficial/Expland/releases"
            target="_blank"
          >
            Download
          </Link>
        </Button>
      </>
    ),
  },
];

export default function GamesPage() {
  return (
    <div className="flex flex-col gap-4 mx-auto p-2 w-full max-w-5xl md:mt-15 mt-10">
      {games.map((game, index) => (
        <GameComponent game={game} index={index} key={index} />
      ))}
      <NewsletterBox className="mt-5" />
    </div>
  );
}

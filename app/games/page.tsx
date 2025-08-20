import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Game } from "@/lib/interfaces";
import { GameComponent } from "./game";
import { ChevronDown, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Games",
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
        <Button>
          Download <ChevronDown />
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
    </div>
  );
}

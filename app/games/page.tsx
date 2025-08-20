import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { Game } from "@/lib/interfaces";
import { GameComponent } from "./game";

export const metadata: Metadata = {
  title: "Games",
};

const games: Game[] = [
  {
    name: "Expland",
    description:
      "Face adversity, hardship, enjoy adventure as well, and discover a second chance to fix past mistakes and become a better person in a mysterious world with nightmares and happiness just around the corner.",
    image: "",
    url: "/games/expland",
    buttons: (
      <>
        <Button>Download</Button>
      </>
    ),
  },
];

export default function GamesPage() {
  return (
    <div className="flex flex-col gap-4 mx-auto p-2 w-full max-w-5xl md:mt-10 mt-5">
      {games.map((game, index) => (
        <GameComponent game={game} index={index} key={index} />
      ))}
    </div>
  );
}

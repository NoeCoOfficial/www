import { Metadata } from "next";
import { GameComponent } from "./game";
import { gamesData } from "@/lib/data/games";

export const metadata: Metadata = {
  title: "Games",
  description:
    "We are a partnership of two developers looking to find joy in making video games",
};

export default function GamesPage() {
  return (
    <div className="flex flex-col gap-4 mx-auto p-2 w-full max-w-5xl md:mt-15 mt-10">
      {gamesData.map((game, index) => (
        <GameComponent game={game} index={index} key={index} />
      ))}
    </div>
  );
}

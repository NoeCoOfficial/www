import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Games",
};

const games = [
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
    <div className="flex flex-col gap-2  mx-auto p-2 w-full max-w-5xl md:mt-10 mt-5">
      {games.map((game) => (
        <div className="w-full grid md:grid-cols-2 gap-4" key={game.name}>
          <div className="w-full h-full bg-neutral-500 aspect-video rounded"></div>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl">{game.name}</h2>
            <p className="text-xl">{game.description}</p>
            <div className="grow"></div>
            <div className="flex flex-row flex-wrap gap-2">
              {game.buttons}
              <Button variant="outline" asChild>
                <Link href={game.url}>More</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

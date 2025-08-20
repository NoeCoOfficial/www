import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Games",
};

export default function GamesPage() {
  return (
    <div className="flex flex-col gap-2  mx-auto p-2 w-full max-w-5xl md:mt-10 mt-5">
      <div className="w-full grid md:grid-cols-2 gap-4">
        <div className="w-full h-full bg-neutral-500 aspect-video rounded"></div>
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl">Expland</h2>
          <p className="text-xl">
            Face adversity, hardship, enjoy adventure as well, and discover a
            second chance to fix past mistakes and become a better person in a
            mysterious world with nightmares and happiness just around the
            corner.
          </p>
        </div>
      </div>
    </div>
  );
}

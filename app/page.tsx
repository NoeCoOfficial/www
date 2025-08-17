import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="max-w-2xl w-full grid grid-cols-2  mx-auto p-3 gap-10 mt-20">
        <Image
          src="/logo-transparent.png"
          alt="Noe Co. Logo"
          className="max-w-52 ml-auto self-center"
          width={500}
          height={305}
        />
        <h1 className="text-left text-4xl font-bold self-center">
          Making indie games for everyone.
        </h1>
      </div>
      <div className="max-w-2xl w-full mx-auto mt-5">
        We are a partnership of two developers looking to find joy in making
        video games. Currently as of writing, we only have one game in
        development, called Expland, which we plan to be our first game to
        release to the public. We are putting our heart and soul into this game,
        and we hope you enjoy it when it comes out. Stay tuned!
      </div>
    </>
  );
}

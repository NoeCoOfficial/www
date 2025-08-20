"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { IntroductionSection } from "@/components/home/IntroductionSection";

export default function Home() {
  return (
    <div className="my-auto flex flex-col gap-2 p-2 py-12">
      <HeroSection />
      <IntroductionSection />
    </div>
  );
}

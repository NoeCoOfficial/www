import { Metadata } from "next";

import { ExplandPageContent } from "./content";

export const metadata: Metadata = {
  title: "Expland",
  description:
    "Face adversity, hardship, enjoy adventure as well, and discover a second chance to fix past mistakes and become a better person in a mysterious world with nightmares and happiness just around the corner.",
};

export default function ExplandPage() {
  return <ExplandPageContent />;
}

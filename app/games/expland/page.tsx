import { Metadata } from "next";

import { ExplandPageContent } from "./content";

export const metadata: Metadata = {
  title: "Expland",
};

export default function ExplandPage() {
  return <ExplandPageContent />;
}

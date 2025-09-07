import NewsletterBox from "@/components/newsletter";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Newsletter"
}

export default function Newsletter() {
  return (
    <div className="my-auto flex flex-col gap-2 p-2 py-12">
      <NewsletterBox />
    </div>
  );
}

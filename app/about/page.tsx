import Content from "@/components/content";
import { Metadata } from "next";
import { Team } from "./team";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Content>
      <h1>About</h1>
      We are a partnership of two developers looking to find joy in making video
      games. Currently, as of writing, we only have one game in development,
      called Expland, which we plan to be our first game to release to the
      public. We are putting our heart and soul into this game, and we hope you
      enjoy it when it comes out. Stay tuned! All of our socials are linked
      below.
      <h2>Meet the Team</h2>
      <Team />
    </Content>
  );
}

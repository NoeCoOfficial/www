import Content from "@/components/content";
import { Metadata } from "next";
import { Team } from "./team";
import Link from "next/link";

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
      <h2>Dedications</h2>
      <ul>
        <li>Mel Timpson, for being the world's greatest school teacher.</li>
        <li>
          Erik Miller, another founder of Noe Co., who left to pursue other
          things.
        </li>
        <li>The team at the STEMVGC</li>
      </ul>
      <h2>Shout-outs</h2>
      <ul>
        <li>Shaheer Usman / Shazman</li>
        <li>Xavier Hosking / Javier</li>
        <li>Kai Steele</li>
        <li>Dylan Wilson / yoyobros</li>
        <li>Evan Banks</li>
        <li>amacd_</li>
        <li>Kepax / Kphlo</li>
      </ul>
      <h2>Special Thanks</h2>A heartfelt thank you to the tools and communities
      that have helped us along the way:
      <ul>
        <li>
          <Link href="https://godotengine.org/" target="_blank">
            Godot Engine
          </Link>
          : For providing an amazing open-source game development platform.
        </li>
        <li>
          <Link href="https://forum.godotengine.org/" target="_blank">
            Godot Forums
          </Link>{" "}
          and{" "}
          <Link href="https://stackoverflow.com/" target="_blank">
            Stack Overflow
          </Link>
          : For giving us <span className="line-through">code to copy</span>{" "}
          answers to literally everything.
        </li>
        <li>
          <Link href="https://www.youtube.com/" target="_blank">
            YouTube
          </Link>
          : For providing a free learning resource and millions of tutorials.
        </li>
        <li>
          <Link href="https://github.com/" target="_blank">
            Github
          </Link>
          : For hosting our code
        </li>
      </ul>
    </Content>
  );
}

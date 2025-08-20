import Content from "@/components/content";
import { Metadata } from "next";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDiscord,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Card>
          <CardHeader>
            <CardTitle>Sebastian Suciu</CardTitle>
          </CardHeader>
          <CardContent>
            Seb is a 15-year-old high school student who loves messing around
            with computers and programming languages. His favorite video game is
            Geometry Dash, and the engine he uses to make games is Godot and
            Blender. He has been making games and projects for over 2 years, and
            he has been loving every second of it. He enjoys playing Basketball
            and sport and is skilled in GDScript, Python, and C++.
          </CardContent>
          <CardFooter>
            <div className="flex flex-row gap-1 not-prose">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/sebashtioon" target="_blank">
                  <span className="sr-only">Github</span>
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://discord.com/users/1110329250306859018"
                  target="_blank"
                >
                  <span className="sr-only">Discord</span>
                  <FontAwesomeIcon icon={faDiscord} />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.youtube.com/@sebashtioon_"
                  target="_blank"
                >
                  <span className="sr-only">Youtube</span>
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Tristan Taylor</CardTitle>
          </CardHeader>
          <CardContent>
            Tristan is 15 years old and, unlike Seb, enjoys making game assets
            rather than coding, as well as being skilled in Blender, Soundtrap
            and paperwork. Tristan is the main source of ideas. He is great at
            making lore, storyboarding, and game planning. His favorite video
            game is Subnautica.
          </CardContent>
          <CardFooter>
            <div className="flex flex-row gap-1 not-prose">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/GoatsAreTB" target="_blank">
                  <span className="sr-only">Github</span>
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://discord.com/users/1188276399048503346"
                  target="_blank"
                >
                  <span className="sr-only">Discord</span>
                  <FontAwesomeIcon icon={faDiscord} />
                </Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Content>
  );
}

import Content from "@/components/content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Content>
      <h1>About</h1>
      We are a partnership of two who like making games.
    </Content>
  );
}

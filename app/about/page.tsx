import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="prose mt-5 mx-auto prose-custom max-w-5xl w-full p-2">
      <h1>About</h1>
      We are a partnership of two who like making games.
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="m-auto p-2">
      <div className="text-center p-4 gap-2 flex flex-col items-center">
        <h1 className="text-9xl">404</h1>
        <p>The page you are looking for does not exist.</p>
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
      </div>
    </div>
  );
}

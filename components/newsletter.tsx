"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function NewsletterForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="flex flex-row gap-2 p-2">
        <Input name="email" type="email" placeholder="Email" />
        <Button>Subscribe</Button>
      </div>
    </form>
  );
}

export default function NewsletterBox() {
  return (
    <div className="max-w-prose mx-auto w-full p-4 border border-dashed rounded-md flex flex-col items-center gap-2">
      <h2 className="text-xl font-bold">Stay up to date</h2>
      <div className="w-full">
        <NewsletterForm />
      </div>
    </div>
  );
}

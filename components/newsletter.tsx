"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function NewsletterSubscribe() {
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

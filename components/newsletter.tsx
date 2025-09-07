"use client";

import clsx from "clsx";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  motion,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from "motion/react";

export function NewsletterForm({
  onSubmitAction = () => {},
}: {
  onSubmitAction?: (email: string) => void;
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const email = (event.target as HTMLFormElement).email.value;
        onSubmitAction(email);
      }}
    >
      <div className="flex flex-row gap-2 p-2">
        <Input name="email" type="email" placeholder="Email" />
        <Button>Subscribe</Button>
      </div>
    </form>
  );
}

export default function NewsletterBox({
  className,
  initial = { opacity: 0, y: 25 },
  animate = { opacity: 1, y: 0 },
  transition = { ease: [0.165, 0.84, 0.44, 1.0], delay: 0.2 },
  heading = "Stay up to date",
  headingClassName,
}: {
  className?: string;
  initial?: boolean | TargetAndTransition | VariantLabels | undefined;
  animate?: boolean | TargetAndTransition | VariantLabels | undefined;
  transition?: Transition<any> | undefined;
  heading?: string;
  headingClassName?: string;
}) {
  return (
    <motion.div
      className={clsx(
        "max-w-prose mx-auto w-full p-4 border border-dashed rounded-md flex flex-col items-center gap-2",
        className,
      )}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <h2 className={clsx("text-xl font-bold", headingClassName)}>{heading}</h2>
      <div className="w-full">
        <NewsletterForm />
      </div>
    </motion.div>
  );
}

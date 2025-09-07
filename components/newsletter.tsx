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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";
import posthog from "posthog-js";

export function NewsletterForm({
  onSubmitAction = () => {},
}: {
  onSubmitAction?: (email: string) => void;
}) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const email = (event.target as HTMLFormElement).email.value;
        posthog.capture("newsletter_signup", { email });
        setSubmitting(true);
        toast.promise(
          new Promise((resolve, reject) => {
            fetch("api/subscribe", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email }),
            })
              .then((response) =>
                response.json().then((data) => {
                  setSubmitting(false);
                  if (data.success) {
                    onSubmitAction(email);
                    setSubmitted(true);
                    resolve(data.message);
                  } else {
                    reject(data.message);
                  }
                }),
              )
              .catch((error) => {
                setSubmitting(false);
                reject(error);
              });
          }),
          {
            loading: "Submitting...",
            success: (response) => response as string,
            error: (error) => error,
          },
        );
      }}
    >
      {submitted ? (
        <div className="p-2 bg-card rounded-md text-center border border-dashed">
          Subscribed!
        </div>
      ) : (
        <div className="flex flex-row gap-2">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            disabled={submitting}
          />
          <Button disabled={submitting}>Subscribe</Button>
        </div>
      )}
    </form>
  );
}

export function NewsletterDialog({
  dialogClassName,
  triggerClassName,
  triggerText = "Subscribe",
  heading = "Stay up to date",
  description = "Get the latest news and updates",
}: {
  dialogClassName?: string;
  triggerClassName?: string;
  triggerText?: string;
  heading?: string;
  description?: string;
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger className={triggerClassName}>{triggerText}</DialogTrigger>
      <DialogContent className={dialogClassName}>
        <DialogHeader>
          <DialogTitle>{heading}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <NewsletterForm onSubmitAction={() => setDialogOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}

export default function NewsletterBox({
  className,
  initial = { opacity: 0, y: 25 },
  animate = { opacity: 1, y: 0 },
  transition = { ease: [0.165, 0.84, 0.44, 1.0], delay: 0.2 },
  heading = "Stay up to date",
  description = "Get the latest news and updates",
}: {
  className?: string;
  initial?: boolean | TargetAndTransition | VariantLabels | undefined;
  animate?: boolean | TargetAndTransition | VariantLabels | undefined;
  transition?: Transition<any> | undefined;
  heading?: string;
  description?: string;
}) {
  return (
    <div className="mx-auto p-2 w-full max-w-prose">
      <motion.div
        className={clsx(
          "w-full p-4 border bg-card rounded-md flex flex-col gap-1",
          className,
        )}
        initial={initial}
        animate={animate}
        transition={transition}
      >
        <h2 className={clsx("text-xl font-bold")}>{heading}</h2>
        <p>{description}</p>
        <div className="w-full mt-2">
          <NewsletterForm />
        </div>
      </motion.div>
    </div>
  );
}

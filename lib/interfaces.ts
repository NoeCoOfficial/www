import { JSX } from "react";

export interface Game {
  name: string;
  description: string;
  image: { src: string; width: number; height: number };
  url: string;
  buttons: JSX.Element;
}

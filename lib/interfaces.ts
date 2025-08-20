import { JSX } from "react";

export interface Game {
  name: string;
  description: string;
  image: string;
  url: string;
  buttons: JSX.Element;
}

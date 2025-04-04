import { Manufacturer } from "./manufacturer";

export type Disc = {
    _id: string;
    title: string;
    type: "Distance Driver" | "Driver" | "Mid-Range" | "Putter";
    speed: number;
    glide: number;
    turn: number;
    fade: number;
    manufacturer: Manufacturer;
  };
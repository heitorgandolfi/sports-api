import { createEvent } from "effector";

export const loadGetTopRedCards = createEvent<void>("loadGetTopRedCards");
export const loadGetTopRedCardsDone = createEvent<any>(
  "loadGetTopRedCardsDone",
);
export const loadGetTopRedCardsFail = createEvent<any>("loadGetTopRedCardsFail");

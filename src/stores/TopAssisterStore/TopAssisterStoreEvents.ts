import { createEvent } from "effector";

export const loadGetTopAssister = createEvent<void>("loadGetTopAssister");
export const loadGetTopAssisterDone = createEvent<any>(
  "loadGetTopAssisterDone",
);
export const loadGetTopAssisterFail = createEvent<any>("loadGetTopAssisterFail");

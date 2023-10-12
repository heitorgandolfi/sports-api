import { createEvent } from "effector";

export const loadGetTopYellowCards = createEvent<void>("loadGetTopYellowCards");
export const loadGetTopYellowCardsDone = createEvent<any>(
  "loadGetTopYellowCardsDone",
);
export const loadGetTopYellowCardsFail = createEvent<any>("loadGetTopYellowCardsFail");

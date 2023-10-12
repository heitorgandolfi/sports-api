import { createEvent } from "effector";

export const loadGetTopScorer = createEvent<void>("loadGetTopScorer");
export const loadGetTopScorerDone = createEvent<any>(
  "loadGetTopScorerDone",
);
export const loadGetTopScorerFail = createEvent<any>("loadGetTopScorerFail");

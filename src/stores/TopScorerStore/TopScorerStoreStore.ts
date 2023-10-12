import { createStore } from "effector";
import { TopScorerState } from "./TopScorerStoreState";
import {
  loadGetTopScorer,
  loadGetTopScorerDone,
  loadGetTopScorerFail,
} from "./TopScorerStoreEvents";

const initialState: TopScorerState = {
  playerPhotoTopScorer: "",
  playerNameTopScorer: "",
  playerAgeTopScorer: 0,
  playerPositionTopScorer: "",
  playerTeamLogoTopScorer: "",
  playerGoalsTopScorer: 0,
  isLoading: false,
  hasError: false,
};

const TopScorerStore = createStore<TopScorerState>(initialState)
  .on(loadGetTopScorer, (state) => ({
    ...state,
    isLoading: true,
    hasError: false,
  }))
  .on(loadGetTopScorerDone, (state, data) => ({
    ...state,
    playerPhotoTopScorer: data?.photo,
    playerNameTopScorer: data?.name,
    playerAgeTopScorer: data?.age,
    playerPositionTopScorer: data?.position,
    playerTeamLogoTopScorer: data?.teamLogo,
    playerGoalsTopScorer: data?.goals,
    isLoading: false,
    hasError: false,
  }))
  .on(loadGetTopScorerFail, () => ({
    ...initialState,
    hasError: true,
  }));

export default TopScorerStore;

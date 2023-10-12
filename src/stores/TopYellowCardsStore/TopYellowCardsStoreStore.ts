import { createStore } from "effector";

import {
  loadGetTopYellowCards,
  loadGetTopYellowCardsDone,
  loadGetTopYellowCardsFail,
} from "./TopYellowCardsStoreEvents";
import { TopYellowCardsState } from "./TopYellowCardsStoreState";

const initialState: TopYellowCardsState = {
  playerPhotoTopYellowCards: "",
  playerNameTopYellowCards: "",
  playerAgeTopYellowCards: 0,
  playerPositionTopYellowCards: "",
  playerTeamLogoTopYellowCards: "",
  playerCardsTopYellowCards: 0,
  isLoading: false,
  hasError: false,
};

const TopYellowCardsStore = createStore<TopYellowCardsState>(initialState)
  .on(loadGetTopYellowCards, (state) => ({
    ...state,
    isLoading: true,
    hasError: false,
  }))
  .on(loadGetTopYellowCardsDone, (state, data) => ({
    ...state,
    playerPhotoTopYellowCards: data?.photo,
    playerNameTopYellowCards: data?.name,
    playerAgeTopYellowCards: data?.age,
    playerPositionTopYellowCards: data?.position,
    playerTeamLogoTopYellowCards: data?.teamLogo,
    playerCardsTopYellowCards: data?.cards,
    isLoading: false,
    hasError: false,
  }))
  .on(loadGetTopYellowCardsFail, () => ({
    ...initialState,
    hasError: true,
  }));

export default TopYellowCardsStore;

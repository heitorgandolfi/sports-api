import { createStore } from "effector";

import {
  loadGetTopRedCards,
  loadGetTopRedCardsDone,
  loadGetTopRedCardsFail,
} from "./TopRedCardsStoreEvents";
import { TopRedCardsState } from "./TopRedCardsStoreState";

const initialState: TopRedCardsState = {
  playerPhotoTopRedCards: "",
  playerNameTopRedCards: "",
  playerAgeTopRedCards: 0,
  playerPositionTopRedCards: "",
  playerTeamLogoTopRedCards: "",
  playerCardsTopRedCards: 0,
  isLoading: false,
  hasError: false,
};

const TopRedCardsStore = createStore<TopRedCardsState>(initialState)
  .on(loadGetTopRedCards, (state) => ({
    ...state,
    isLoading: true,
    hasError: false,
  }))
  .on(loadGetTopRedCardsDone, (state, data) => ({
    ...state,
    playerPhotoTopRedCards: data?.photo,
    playerNameTopRedCards: data?.name,
    playerAgeTopRedCards: data?.age,
    playerPositionTopRedCards: data?.position,
    playerTeamLogoTopRedCards: data?.teamLogo,
    playerCardsTopRedCards: data?.cards,
    isLoading: false,
    hasError: false,
  }))
  .on(loadGetTopRedCardsFail, () => ({
    ...initialState,
    hasError: true,
  }));

export default TopRedCardsStore;

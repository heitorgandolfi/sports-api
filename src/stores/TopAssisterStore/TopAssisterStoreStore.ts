import { createStore } from "effector";

import {
  loadGetTopAssister,
  loadGetTopAssisterDone,
  loadGetTopAssisterFail,
} from "./TopAssisterStoreEvents";
import { TopAssisterState } from "./TopAssisterStoreState";

const initialState: TopAssisterState = {
  playerPhotoTopAssister: "",
  playerNameTopAssister: "",
  playerAgeTopAssister: 0,
  playerPositionTopAssister: "",
  playerTeamLogoTopAssister: "",
  playerAssistsTopAssister: 0,
  isLoading: false,
  hasError: false,
};

const TopAssisterStore = createStore<TopAssisterState>(initialState)
  .on(loadGetTopAssister, (state) => ({
    ...state,
    isLoading: true,
    hasError: false,
  }))
  .on(loadGetTopAssisterDone, (state, data) => ({
    ...state,
    playerPhotoTopAssister: data?.photo,
    playerNameTopAssister: data?.name,
    playerAgeTopAssister: data?.age,
    playerPositionTopAssister: data?.position,
    playerTeamLogoTopAssister: data?.teamLogo,
    playerAssistsTopAssister: data?.assists,
    isLoading: false,
    hasError: false,
  }))
  .on(loadGetTopAssisterFail, () => ({
    ...initialState,
    hasError: true,
  }));

export default TopAssisterStore;

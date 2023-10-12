import { standingsProps } from "../../models/Standings";
import { GetPlayersStatisticsService } from "../../services/GetPlayersStatisticsService";
import {
  loadGetTopRedCards,
  loadGetTopRedCardsDone,
  loadGetTopRedCardsFail,
} from "../../stores/TopRedCardsStore/TopRedCardsStoreEvents";

const execute = async ({ leagueId, season }: standingsProps): Promise<any> => {
  loadGetTopRedCards();

  return GetPlayersStatisticsService.getTopRedCardsPlayer({
    leagueId,
    season,
  })
    .then((response) => {
      const topRedCardsInfo = {
        photo: response[0].player.photo,
        name: response[0].player.name,
        age: response[0].player.age,
        position: response[0].statistics[0].games.position,
        teamLogo: response[0].statistics[0].team.logo,
        cards: response[0].statistics[0].cards.red,
      };

      loadGetTopRedCardsDone(topRedCardsInfo);
    })
    .catch((error) => {
      loadGetTopRedCardsFail(); // incluir mensagem de erro vinda da api na store.
      return error;
    });
};

export const getTopRedCardsPlayer = {
  execute,
};

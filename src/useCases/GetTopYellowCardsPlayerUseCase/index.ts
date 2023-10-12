import { standingsProps } from "../../models/Standings";
import { GetPlayersStatisticsService } from "../../services/GetPlayersStatisticsService";
import {
  loadGetTopYellowCards,
  loadGetTopYellowCardsDone,
  loadGetTopYellowCardsFail,
} from "../../stores/TopYellowCardsStore/TopYellowCardsStoreEvents";

const execute = async ({ leagueId, season }: standingsProps): Promise<any> => {
  loadGetTopYellowCards();

  return GetPlayersStatisticsService.getTopYellowCardsPlayer({
    leagueId,
    season,
  })
    .then((response) => {
      const topYellowCardsInfo = {
        photo: response[0].player.photo,
        name: response[0].player.name,
        age: response[0].player.age,
        position: response[0].statistics[0].games.position,
        teamLogo: response[0].statistics[0].team.logo,
        cards: response[0].statistics[0].cards.yellow,
      };

      loadGetTopYellowCardsDone(topYellowCardsInfo);
    })
    .catch((error) => {
      loadGetTopYellowCardsFail(); // incluir mensagem de erro vinda da api na store.
      return error;
    });
};

export const getTopYellowCardsPlayer = {
  execute,
};

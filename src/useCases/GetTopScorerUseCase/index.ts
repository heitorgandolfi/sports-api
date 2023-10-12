import { standingsProps } from "../../models/Standings";
import { GetPlayersStatisticsService } from "../../services/GetPlayersStatisticsService";
import {
  loadGetTopScorer,
  loadGetTopScorerDone,
  loadGetTopScorerFail,
} from "../../stores/TopScorerStore/TopScorerStoreEvents";

const execute = async ({ leagueId, season }: standingsProps): Promise<any> => {
  loadGetTopScorer();

  return GetPlayersStatisticsService.getTopScorerPlayer({ leagueId, season })
    .then((response) => {
      const topScorerInfo = {
        photo: response[0].player.photo,
        name: response[0].player.name,
        age: response[0].player.age,
        position: response[0].statistics[0].games.position,
        teamLogo: response[0].statistics[0].team.logo,
        goals: response[0].statistics[0].goals.total,
      };

      loadGetTopScorerDone(topScorerInfo);
    })
    .catch((error) => {
      loadGetTopScorerFail(); // incluir mensagem de erro vinda da api na store.
      return error;
    });
};

export const getTopScorerPlayer = {
  execute,
};

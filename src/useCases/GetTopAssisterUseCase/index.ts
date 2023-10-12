import { standingsProps } from "../../models/Standings";
import { GetPlayersStatisticsService } from "../../services/GetPlayersStatisticsService";
import {
  loadGetTopAssister,
  loadGetTopAssisterDone,
  loadGetTopAssisterFail,
} from "../../stores/TopAssisterStore/TopAssisterStoreEvents";

const execute = async ({ leagueId, season }: standingsProps): Promise<any> => {
  loadGetTopAssister();

  return GetPlayersStatisticsService.getTopAssisterPlayer({ leagueId, season })
    .then((response) => {      
      const topAssisterInfo = {
        photo: response[0].player.photo,
        name: response[0].player.name,
        age: response[0].player.age,
        position: response[0].statistics[0].games.position,
        teamLogo: response[0].statistics[0].team.logo,
        assists: response[0].statistics[0].goals.assists,
      };

      loadGetTopAssisterDone(topAssisterInfo);
    })
    .catch((error) => {
      loadGetTopAssisterFail(); // incluir mensagem de erro vinda da api na store.
      return error;
    });
};

export const getTopAssisterPlayer = {
  execute,
};

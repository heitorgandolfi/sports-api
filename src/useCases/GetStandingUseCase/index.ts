import { standingsProps } from "../../models/Standings";
import { GetStandingService } from "../../services/GetStandingService";

const execute = async ({
  leagueId,
  season,
}: standingsProps): Promise<any[]> => {
  // disparar evento de carregamento (Effector)

  return GetStandingService.getStanding({ leagueId, season })
    .then((response) => {
      // disparar evento de sucesso (Effector)
      console.log(response);
      return response;
    })
    .catch((error) => {
      // disparar evento de erro (Effector)
      console.log(error);
      return error;
    });
};

export const GetStandingUseCase = {
  execute,
};

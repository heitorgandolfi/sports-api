import Api from "../../clients/api/Api";
import { standingsProps } from "../../models/Standings";

const getStanding = async ({
  leagueId,
  season,
}: standingsProps): Promise<any[]> => {
  try {
    const response = await Api.get({
      url: `/standings?league=${leagueId}&season=${season}`,
    });

    if (response.data && response.data.response) {
      return response.data.response;
    } else {
      throw new Error("Invalid response data");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const GetStandingService = {
  getStanding,
};

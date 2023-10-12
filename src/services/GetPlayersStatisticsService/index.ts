import Api from "../../clients/api/Api";
import { standingsProps } from "../../models/Standings";

const getTopScorerPlayer = async ({
  leagueId,
  season,
}: standingsProps): Promise<any> => {
  try {
    const response = await Api.get({
      url: `/players/topscorers?league=${leagueId}&season=${season}`,
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

const getTopAssisterPlayer = async ({
  leagueId,
  season,
}: standingsProps): Promise<any> => {
  try {
    const response = await Api.get({
      url: `/players/topassists?league=${leagueId}&season=${season}`,
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

const getTopYellowCardsPlayer = async ({
  leagueId,
  season,
}: standingsProps): Promise<any> => {
  try {
    const response = await Api.get({
      url: `/players/topyellowcards?league=${leagueId}&season=${season}`,
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

const getTopRedCardsPlayer = async ({
  leagueId,
  season,
}: standingsProps): Promise<any> => {
  try {
    const response = await Api.get({
      url: `/players/topredcards?league=${leagueId}&season=${season}`,
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


export const GetPlayersStatisticsService = {
  getTopScorerPlayer,
  getTopAssisterPlayer,
  getTopYellowCardsPlayer,
  getTopRedCardsPlayer,
};

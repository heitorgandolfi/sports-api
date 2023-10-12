import { useEffect } from "react";
import { useStore } from "effector-react";
import i18n from "../../i18n/locales";

import { Fixtures } from "../../components/Fixtures";
import { PlayerStatistics } from "../../components/PlayerStatistics";
import { StandingTable } from "../../components/StandingTable";

import { getTopScorerPlayer } from "../../useCases/GetTopScorerUseCase";
import TopScorerStore from "../../stores/TopScorerStore/TopScorerStoreStore";

import { getTopAssisterPlayer } from "../../useCases/GetTopAssisterUseCase";
import TopAssisterStore from "../../stores/TopAssisterStore/TopAssisterStoreStore";

import { getTopRedCardsPlayer } from "../../useCases/GetTopRedCardsPlayerUseCase";
import TopRedCardsStore from "../../stores/TopRedCardsStore/TopRedCardsStoreStore";

import { getTopYellowCardsPlayer } from "../../useCases/GetTopYellowCardsPlayerUseCase";
import TopYellowCardsStore from "../../stores/TopYellowCardsStore/TopYellowCardsStoreStore";

import {
  Container,
  ContentWrapper,
  InfosLeagueWrapper,
  PlayersStatisticsWrapper,
} from "./styles";

export const HomePage = () => {
  const {
    playerPhotoTopScorer,
    playerNameTopScorer,
    playerAgeTopScorer,
    playerPositionTopScorer,
    playerTeamLogoTopScorer,
    playerGoalsTopScorer,
  } = useStore(TopScorerStore);

  const {
    playerPhotoTopAssister,
    playerNameTopAssister,
    playerAgeTopAssister,
    playerPositionTopAssister,
    playerTeamLogoTopAssister,
    playerAssistsTopAssister,
  } = useStore(TopAssisterStore);

  const {
    playerPhotoTopRedCards,
    playerNameTopRedCards,
    playerAgeTopRedCards,
    playerPositionTopRedCards,
    playerTeamLogoTopRedCards,
    playerCardsTopRedCards,
  } = useStore(TopRedCardsStore);

  const {
    playerPhotoTopYellowCards,
    playerNameTopYellowCards,
    playerAgeTopYellowCards,
    playerPositionTopYellowCards,
    playerTeamLogoTopYellowCards,
    playerCardsTopYellowCards,
  } = useStore(TopYellowCardsStore);

  useEffect(() => {
    getTopScorerPlayer.execute({ leagueId: 39, season: 2023 });
    getTopAssisterPlayer.execute({ leagueId: 39, season: 2023 });
    getTopRedCardsPlayer.execute({ leagueId: 39, season: 2023 });
    getTopYellowCardsPlayer.execute({ leagueId: 39, season: 2023 });
  }, []);

  return (
    <Container>
      <InfosLeagueWrapper>
        <h3>logo da liga</h3>
        <h1>Premier League</h1>
        <span>bandeira do país da liga</span>
      </InfosLeagueWrapper>

      <ContentWrapper>
        <StandingTable />
        <Fixtures />
      </ContentWrapper>

      <PlayersStatisticsWrapper>
        <PlayerStatistics
          sectionName={i18n.t("playerStatistics.topScorer")}
          playerImgUrl={playerPhotoTopScorer}
          playerName={playerNameTopScorer}
          playerAge={playerAgeTopScorer}
          playerPosition={playerPositionTopScorer}
          playerTeamLogo={playerTeamLogoTopScorer}
          playerStatistic={playerGoalsTopScorer}
          statisticName={i18n.t("playerStatistics.goals")}
        />
        <PlayerStatistics
          sectionName={i18n.t("playerStatistics.topAssister")}
          playerImgUrl={playerPhotoTopAssister}
          playerName={playerNameTopAssister}
          playerAge={playerAgeTopAssister}
          playerPosition={playerPositionTopAssister}
          playerTeamLogo={playerTeamLogoTopAssister}
          playerStatistic={playerAssistsTopAssister}
          statisticName={i18n.t("playerStatistics.assists")}
        />
        <PlayerStatistics
          sectionName={i18n.t("playerStatistics.topRedCards")}
          playerImgUrl={playerPhotoTopRedCards}
          playerName={playerNameTopRedCards}
          playerAge={playerAgeTopRedCards}
          playerPosition={playerPositionTopRedCards}
          playerTeamLogo={playerTeamLogoTopRedCards}
          playerStatistic={playerCardsTopRedCards}
          statisticName={i18n.t("playerStatistics.cards")}
        />
        <PlayerStatistics
          sectionName={i18n.t("playerStatistics.topYellowCards")}
          playerImgUrl={playerPhotoTopYellowCards}
          playerName={playerNameTopYellowCards}
          playerAge={playerAgeTopYellowCards}
          playerPosition={playerPositionTopYellowCards}
          playerTeamLogo={playerTeamLogoTopYellowCards}
          playerStatistic={playerCardsTopYellowCards}
          statisticName={i18n.t("playerStatistics.cards")}
        />
      </PlayersStatisticsWrapper>
    </Container>
  );
};

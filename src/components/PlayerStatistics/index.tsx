import {
  Container,
  Content,
  PlayerImage,
  SeasonPlayerStatistics,
  Wrapper,
} from "./style";

interface PlayerStatisticsProps {
  sectionName: string;
  playerImgUrl: string;
  playerName: string;
  playerAge: number;
  playerPosition: string;
  playerTeamLogo: string;
  playerStatistic: number;
  statisticName: string;
}

export const PlayerStatistics = ({
  sectionName,
  playerImgUrl,
  playerName,
  playerAge,
  playerPosition,
  playerTeamLogo,
  playerStatistic,
  statisticName,
}: PlayerStatisticsProps) => {
  return (
    <Wrapper>
      <h1>{sectionName}</h1>
      <Container>
        <PlayerImage playerimgurl={playerImgUrl} />

        <Content>
          <div>
            <h2>{playerName}</h2>
            <h4>{playerAge} yo</h4>
          </div>
          <SeasonPlayerStatistics>
            <div>
              <h4>{playerPosition}</h4>

              <img
                src={playerTeamLogo}
                alt={`top ${statisticName} player team logo`}
              />
            </div>
            <h3>
              {playerStatistic} {statisticName}
            </h3>
          </SeasonPlayerStatistics>
        </Content>
      </Container>
    </Wrapper>
  );
};

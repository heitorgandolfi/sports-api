import { SubtitlesWrapper, SubtitleSquare } from "./style";

export const TableSubTitle = () => {
  return (
    <SubtitlesWrapper>
      <div>
        <SubtitleSquare variant="CL" />
        <h4>Champions League Group Stage</h4>
      </div>
      <div>
        <SubtitleSquare variant="EL" />
        <h4>Europa League Group Stage</h4>
      </div>
      <div>
        <SubtitleSquare variant="Relegation" />
        <h4>Relegation</h4>
      </div>
    </SubtitlesWrapper>
  );
};

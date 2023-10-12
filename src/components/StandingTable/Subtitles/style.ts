import styled from "styled-components";

export const SubtitlesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  padding: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h4 {
      color: ${({ theme }) => theme["white"]};
    }
  }
`;

type SubtitleSquareProps = {
  variant: "CL" | "EL" | "Relegation";
};

export const SubtitleSquare = styled.div<SubtitleSquareProps>`
  height: 10px;
  width: 10px;
  background-color: ${({ theme, variant }) =>
    variant === "CL"
      ? theme["green-400"]
      : variant === "EL"
      ? theme["orange-400"]
      : theme["red-400"]};
`;

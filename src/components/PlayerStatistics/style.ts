import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h1 {
    color: ${({ theme }) => theme["red-400"]};
    font-size: 1.3125rem;
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  max-width: 280px;
  width: 100%;
  padding: 1rem;

  border-radius: 10px;

  color: ${({ theme }) => theme["white"]};

  -webkit-box-shadow: 0px 0px 33px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 33px -7px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 33px -7px rgba(0, 0, 0, 1);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0.5rem;

  div {
    text-align: center;

    h2 {
      color: ${({ theme }) => theme["red-400"]};
    }
  }
`;

interface PlayerImageProps {
  playerimgurl: string;
}
export const PlayerImage = styled.div<PlayerImageProps>`
  width: 150px;
  height: 150px;

  background-image: url(${(props) => props.playerimgurl});
  background-size: cover;

  border: 2px solid ${({ theme }) => theme["white"]};
  border-radius: 50%;

  -webkit-box-shadow: 0px 0px 33px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 33px -7px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 33px -7px rgba(0, 0, 0, 1);
`;

export const SeasonPlayerStatistics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img {
      width: 2rem;
    }
  }
`;

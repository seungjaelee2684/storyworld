import styled from "styled-components";

export const CharacterContainer = styled.section`
  width: 1040px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 80px;

  @media screen and (max-width: 1040px) {
    width: 100%;
    padding-top: 40px;
  }
`;

export const FirstDetailContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 1040px) {
    flex-direction: column-reverse;
  }
`;

export const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
`;

export const LaneContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
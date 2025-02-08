import styled from "styled-components";

export const CharacterContainer = styled.section`
  width: 1040px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 60px;

  @media screen and (max-width: 1040px) {
    width: 100%;
  }
`;
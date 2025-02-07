import styled from "styled-components";

export const MainContentContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  padding: 100px 0px;

  @media screen and (max-width: 1040px) {
    padding: 80px 20px;
  }
`;
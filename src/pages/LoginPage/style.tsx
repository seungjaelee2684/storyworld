import styled from "styled-components";

export const LoginContainer = styled.section`
  width: fit-content;
  height: calc(100dvh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1040px) {
    width: 100%;
  }
`;
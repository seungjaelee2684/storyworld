import styled from "styled-components";

export const LoginContainer = styled.section`
  width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  @media screen and (max-width: 540px) {
    width: 100%;
    min-height: calc(100dvh - 188px);
    margin-top: 0px;
  }
`;
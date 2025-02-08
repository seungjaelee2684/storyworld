import styled from "styled-components";

export const ErrorContainer = styled.section`
  width: 1040px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 1040px) {
    width: 100%;
  }
`;
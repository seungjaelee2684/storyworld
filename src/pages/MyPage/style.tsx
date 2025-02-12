import styled from "styled-components";

export const MyPageContainer = styled.section`
  width: 1040px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 60px;

  @media screen and (max-width: 1040px) {
    width: 100%;
    gap: 24px;
  }
`;

export const CountListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
`;

export const CreateButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 16px;
`;
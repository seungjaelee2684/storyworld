import styled from "styled-components";

export const StoryContainer = styled.section`
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

export const StoryButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;
`;

export const DetailListContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
`;
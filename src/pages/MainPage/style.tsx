import styled from "styled-components";

export const MainContainer = styled.div`
  width: 1040px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 60px;

  @media screen and (max-width: 1040px) {
    width: 100%;
  }
`;

export const MainBanner = styled.section`
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  user-select: none;
`;

export const MainBannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const MainBannerText = styled.p`
  position: absolute;
  left: 40px;
  bottom: 100px;
  font-size: 48px;
  font-weight: 700;
  text-shadow: #22202080 0px 0px 8px;
  color: #ffffff;
  text-align: start;
  white-space: pre-line;
`;

export const StoryListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 40px;
`;
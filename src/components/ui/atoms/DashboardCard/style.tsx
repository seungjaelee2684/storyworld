import styled from "styled-components";
import { light_blue, light_blue_black, primary } from "../../../../styles/color_pallete";

export const DashboardCardContainer = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid ${light_blue};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  user-select: none;
`;

export const CountText = styled.a`
  font-size: 44px;
  font-weight: 700;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: ${primary};
  }

  @media screen and (max-width: 1040px) {
    font-size: 40px;
  }
`;

export const LabelText = styled.label`
  font-size: 20px;
  color: ${light_blue_black};

  @media screen and (max-width: 1040px) {
    font-size: 16px;
  }
`;
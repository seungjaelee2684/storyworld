import styled from "styled-components";
import { light_blue_heavy } from "../../../../styles/color_pallete";

export const CategoryLaneContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 16px;
`;

export const CategoryExpired = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${light_blue_heavy};
  user-select: none;
`;

export const CategoryContent = styled.p`
  width: 100%;
  text-align: start;
  white-space: pre-line;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
`;
import styled from "styled-components";
import { light_blue_black } from "../../../../styles/color_pallete";

export const ToggleLane = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const ToggleButtonBox = styled.div<{ $toggle: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: ${(props) => props.$toggle ? light_blue_black : '#e9e9e9'};
`;
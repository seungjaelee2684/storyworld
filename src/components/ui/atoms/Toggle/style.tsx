import styled from "styled-components";
import { light_blue, light_blue_black } from "../../../../styles/color_pallete";

export const ToggleButton = styled.button<{ $toggle: boolean }>`
  width: 54px;
  height: 24px;
  border: 1px solid ${light_blue};
  border-radius: 40px;
  background-color: ${(props) => props.$toggle ? `${light_blue_black}` : '#e9e9e9'};
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0px 4px;
  box-sizing: border-box;
  box-shadow: 1px 1px 4px 0px #22202080 inset;
  transition: all 0.2s;
  cursor: pointer;
`;

export const ToggleSwitch = styled.div<{ $toggle: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #fefefe;
  box-shadow: 1px 1px 4px 0px #22202080;
  transform: ${(props) => props.$toggle ? 'translateX(24px)' : 'translateX(0px)'};
  transition: all 0.2s;
`;
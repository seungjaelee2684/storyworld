import styled from "styled-components";
import { light_blue, light_blue_black } from "../../../../styles/color_pallete";

export const CharacterCheckBox = styled.label<{
  $checked: boolean
}>`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.$checked ? light_blue : 'transparent'};
  color: ${light_blue_black};
  font-weight: 500;
  cursor: pointer;
`;

export const CharacterCheckInput = styled.input`
  display: none;
`;
import styled from "styled-components";
import { light_blue, light_blue_heavy } from "../../../../styles/color_pallete";

export const CheckboxContainer = styled.label<{ $selected: boolean }>`
  width: fit-content;
  height: fit-content;
  border: 1px solid ${light_blue};
  background-color: ${(props) => props.$selected ? light_blue_heavy : 'transparent'};
  color: ${(props) => props.$selected ? '#ffffff' : light_blue_heavy};
  user-select: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 700;
  padding: 8px 12px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: ${light_blue_heavy};
  }
`;

export const CheckboxButton = styled.input`
  display: none;
`;
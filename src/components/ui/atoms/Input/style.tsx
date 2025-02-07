import styled from "styled-components";
import { light_blue, light_blue_heavy, light_blue_strong } from "../../../../styles/color_pallete";

const size: { [key: string]: string } = {
  small: `
    min-height: 30px;
    height: 30px;
    padding: 0px 12px;
    font-size: 14px;
  `,
  medium: `
    min-height: 36px;
    height: 36px;
    padding: 0px 14px;
    font-size: 15px;
  `,
  large: `
    min-height: 42px;
    height: 42px;
    padding: 0px 16px;
    font-size: 16px;
  `
};

export const InputContainer = styled.div<{
  $size: string,
  $full: boolean,
  $focus: boolean,
}>`
  ${(props) => size[props.$size]};
  width: ${(props) => props.$full ? '100%' : '500px'};
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  transition: all 0.2s;
  border: 1px solid ${(props) => props.$focus ? light_blue_heavy : light_blue};
  border-radius: 8px;
  box-sizing: border-box;
`;

export const InputStyle = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  box-sizing: border-box;
  
  &::placeholder {
    color: ${light_blue_strong};
  }
`;
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

const labelSize: { [key: string]: string } = {
  small: `
    left: 12px;
  `,
  medium: `
    left: 14px;
  `,
  large: `
    left: 16px;
  `
};

export const DynamicInputContainer = styled.div<{
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
  position: relative;

  @media screen and (max-width: 1040px) {
    width: 100%;
  }
`;

export const DynamicInputLabel = styled.label<{
  $size: string,
}>`
  ${(props) => labelSize[props.$size]};
  width: fit-content;
  line-height: 100%;
  color: ${light_blue_strong};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  transition: all 0.2s ease-in-out;
  font-size: 14px;
`;

export const DynamicInputStyle = styled.input<{
  $label: string | undefined,
}>`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  box-sizing: border-box;
  
  &::placeholder {
    color: ${(props) => props.$label ? 'transparent' : '#e9e9e9'};
  }

  &:focus ~ ${DynamicInputLabel},
  &:not(:placeholder-shown) ~ ${DynamicInputLabel} {
    top: 0;
    font-size: 12px;
    color: ${light_blue_heavy};
    background: white;
    padding: 0 5px;
  }
`;
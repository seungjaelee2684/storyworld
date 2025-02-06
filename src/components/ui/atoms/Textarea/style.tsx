import styled from "styled-components";
import { light_blue, light_blue_heavy, light_blue_strong } from "../../../../styles/color_pallete";

const size: { [key: string]: string } = {
  small: `
    padding: 12px;
    font-size: 14px;
  `,
  medium: `
    padding: 14px;
    font-size: 15px;
  `,
  large: `
    padding: 16px;
    font-size: 16px;
  `
};

export const TextAreaContainer = styled.textarea<{
  $size: string,
  $full: boolean,
}>`
  ${(props) => size[props.$size]};
  width: ${(props) => props.$full ? '100%' : '500px'};
  height: 150px;
  border-radius: 10px;
  border: 1px solid ${light_blue};
  transition: all 0.2s;
  outline: none;
  resize: none;

  &:focus {
    border: 1px solid ${light_blue_heavy};
  }

  &::placeholder {
    color: ${light_blue_strong};
  }
`;
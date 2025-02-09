import styled from "styled-components";
import { light_blue } from "../../../../styles/color_pallete";

const size: { [key: string]: string } = {
  small: `
    padding: 6px 12px;
    font-size: 15px;
  `,
  medium: `
    padding: 8px 18px;
    font-size: 16px;
  `,
  large: `
    padding: 10px 24px;
    font-size: 17px;
  `
};

export const ChipContainer = styled.span<{
  $size: string,
}>`
  ${(props) => size[props.$size]};
  width: fit-content;
  height: fit-content;
  background-color: ${light_blue};
  user-select: none;
  border-radius: 8px;
  font-weight: 700;
`;
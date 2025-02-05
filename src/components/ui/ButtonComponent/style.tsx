import styled, { css, RuleSet } from "styled-components";
import { primary_heavy, primary_light } from "../../../styles/color_pallete";

const size: { [key: string]: RuleSet } = {
  "small": css`
    padding: 8px 16px;
    font-size: 14px;
  `,
  "medium": css`
    padding: 10px 20px;
    font-size: 16px;
  `,
  "large": css`
    padding: 12px 28px;
    font-size: 18px;
  `
};

const btnType: { [key: string]: RuleSet } = {
  "fill": css`
    color: #333333;
    border: none;
  `,
  "outline": css`
    border: 1px solid;
    background-color: transparent;
  `
};

const colorType = (color: string, type: string) => {
  const btnColor: { [key: string]: RuleSet } = {
    "fill": css`
      background-color: ${color};
      color: #ffffff;
    `,
    "outline": css`
      background-color: transparent;
      color: ${color};
    `
  };

  return btnColor[type];
};

export const ButtonStyle = styled.button<{ $size: string, $btntype: string, $color: string }>`
  width: fit-content;
  height: fit-content;
  font-family: "Pretendard";
  font-weight: 500;
  ${(props) => btnType[props.$btntype]};
  ${(props) => size[props.$size]};
  ${(props) => colorType(props.$color, props.$btntype)};
  border-radius: 8px;
  outline: none;
  user-select: none;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${primary_light};
  }

  &:active {
    background-color: ${primary_heavy};
  }
`;

export const ButtonLinkStyle = styled.a<{ $size: string, $btntype: string, $color: string }>`
  width: fit-content;
  height: fit-content;
  font-family: "Pretendard";
  font-weight: 500;
  ${(props) => btnType[props.$btntype]};
  ${(props) => size[props.$size]};
  ${(props) => colorType(props.$color, props.$btntype)};
  border-radius: 8px;
  outline: none;
  user-select: none;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${primary_light};
  }

  &:active {
    background-color: ${primary_heavy};
  }
`;
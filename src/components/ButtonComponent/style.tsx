import styled, { css, RuleSet } from "styled-components";

const size: { [key: string]: RuleSet } = {
  "small": css`
    padding: 6px 14px;
    font-size: 14px;
  `,
  "medium": css`
    padding: 8px 16px;
    font-size: 16px;
  `,
  "large": css`
    padding: 10px 34px;
    font-size: 18px;
  `
};

const btnType: { [key: string]: RuleSet } = {
  "fill": css`
    color: #333333;
    border: none;
    box-shadow: 2px 2px 4px 0px #33333380;
  `,
  "outline": css`
    border: 1px solid;
    background-color: transparent;
    box-shadow: none;
  `
};

const colorType = (color: string, type: string) => {
  const btnColor: { [key: string]: RuleSet } = {
    "fill": css`
      background-color: ${color};
    `,
    "outline": css`
      color: ${color};
    `
  };

  return btnColor[type];
};

export const ButtonStyle = styled.button<{ $size: string, $btntype: string, $color: string }>`
  width: fit-content;
  height: fit-content;
  font-family: "Pretendard";
  ${(props) => btnType[props.$btntype]};
  ${(props) => size[props.$size]};
  ${(props) => colorType(props.$color, props.$btntype)};
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`;
import styled, { css, RuleSet } from "styled-components";
import { light_blue, light_blue_black, light_blue_heavy, light_blue_strong, primary, primary_heavy, primary_light } from "../../../../styles/color_pallete";

const size: { [key: string]: RuleSet } = {
  "small": css`
    min-height: 30px;
    height: 30px;
    padding: 0px 12px;
    font-size: 14px;
  `,
  "medium": css`
    min-height: 36px;
    height: 36px;
    padding: 0px 16px;
    font-size: 16px;
  `,
  "large": css`
    min-height: 42px;
    height: 42px;
    padding: 0px 24px;
    font-size: 18px;
  `,
  "s_small": css`
    min-height: fit-content;
    height: fit-content;
    padding: 8px;
    font-size: 14px;
  `,
  "s_medium": css`
    min-height: fit-content;
    height: fit-content;
    padding: 12px;
    font-size: 16px;
  `,
  "s_large": css`
    min-height: fit-content;
    height: fit-content;
    padding: 18px;
    font-size: 18px;
  `,
};

const btnType: { [key: string]: RuleSet } = {
  "fill": css`
    color: #ffffff;
    border: none;
    background-color: ${primary};
  `,
  "outline": css`
    color: ${primary};
    border: 1px solid;
    background-color: transparent;
  `,
  "text": css`
    color: ${primary};
    border: none;
    background-color: transparent;
  `,
  "term": css`
    color: #ffffff;
    border: none;
    background-color: ${light_blue_heavy};
  `,
  "light": css`
    color: #333333;
    border: none;
    background-color: ${light_blue};
  `
};

const btnHover: { [key: string]: RuleSet } = {
  "fill": css`
    color: #ffffff;
    border: none;
    background-color: ${primary_light};
  `,
  "outline": css`
    color: ${primary_light};
    border: 1px solid;
    background-color: transparent;
  `,
  "text": css`
    color: ${primary_light};
    border: none;
    background-color: transparent;
  `,
  "term": css`
    color: #ffffff;
    border: none;
    background-color: ${light_blue_strong};
  `,
  "light": css`
    color: #ffffff;
    border: none;
    background-color: ${light_blue_strong};
  `
};

const btnActive: { [key: string]: RuleSet } = {
  "fill": css`
    color: #ffffff;
    border: none;
    background-color: ${primary_heavy};
  `,
  "outline": css`
    color: ${primary_heavy};
    border: 1px solid;
    background-color: transparent;
  `,
  "text": css`
    color: ${primary_heavy};
    border: none;
    background-color: transparent;
  `,
  "term": css`
    color: #ffffff;
    border: none;
    background-color: ${light_blue_black};
  `,
  "light": css`
    color: #ffffff;
    border: none;
    background-color: ${light_blue_black};
  `
};

export const ButtonStyle = styled.button<{
  $size: string,
  $btntype: string,
  $full: boolean,
}>`
  min-width: ${(props) => props.$full ? '100%' : 'fit-content'};
  width: ${(props) => props.$full ? '100%' : 'fit-content'};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-family: "Pretendard";
  font-weight: 500;
  ${(props) => btnType[props.$btntype]};
  ${(props) => size[props.$size]};
  border-radius: 8px;
  outline: none;
  user-select: none;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    ${(props) => btnHover[props.$btntype]};
  }

  &:active {
    ${(props) => btnActive[props.$btntype]};
  }
`;

export const ButtonLinkStyle = styled.a<{
  $size: string,
  $btntype: string,
  $full: boolean,
}>`
  width: ${(props) => props.$full ? '100%' : 'fit-content'};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-family: "Pretendard";
  font-weight: 500;
  ${(props) => btnType[props.$btntype]};
  ${(props) => size[props.$size]};
  border-radius: 8px;
  outline: none;
  user-select: none;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    ${(props) => btnHover[props.$btntype]};
  }

  &:active {
    ${(props) => btnActive[props.$btntype]};
  }
`;
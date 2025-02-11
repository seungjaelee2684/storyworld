import styled from "styled-components";
import { light_blue_black } from "../../../../styles/color_pallete";

export const CharacterCardContainer = styled.li`
  width: 100%;
  height: fit-content;
  cursor: pointer;
`;

export const CharacterCardBox = styled.a`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background-color: transparent;
`;

export const CardText = styled.label`
  width: 100%;
  text-align: center;
  word-wrap: keep-all;
  color: ${light_blue_black};
  font-weight: 500;
  cursor: pointer;

  @media screen and (max-width: 1040px) {
    font-size: 12px;
  }
`;
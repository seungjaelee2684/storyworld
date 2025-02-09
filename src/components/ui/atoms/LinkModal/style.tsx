import styled from "styled-components";
import { light_blue } from "../../../../styles/color_pallete";

export const DetailModalContainer = styled.ul`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 16px;
  gap: 16px;
  font-size: 14px;
  background-color: ${light_blue};
  position: absolute;
  top: 110%;
  right: 0;
  z-index: 21;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 0px #22202080;
`;

export const ModalTitle = styled.label`
  width: 100%;
  text-align: center;
  font-size: 16px;
`;

export const ModalLane = styled.li`
  width: 100%;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalLink = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;
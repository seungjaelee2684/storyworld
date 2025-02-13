import styled from "styled-components";
import { light_blue, light_blue_black, light_blue_strong } from "../../../../styles/color_pallete";

export const ModalBackground = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 25;
  background-color: #33333380;
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => props.$open ? 'visible' : 'hidden'};
  opacity: ${(props) => props.$open ? 1 : 0};
  transition: all 0.2s;
`;

export const ModalContainer = styled.div<{ $open: boolean }>`
  width: 600px;
  height: 700px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 32px;
  box-shadow: 0px 0px 4px 0px ${light_blue_black};
  background-color: #ffffff;
  opacity: ${(props) => props.$open ? 1 : 0};
  transform: ${(props) => props.$open ? 'translateY(0)' : 'translateY(40px)'};
  transition: all 0.4s;
  user-select: none;
  padding: 40px 20px;
  position: relative;
`;

export const LaneWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
`;

export const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${light_blue_strong};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: ${light_blue_black};
  }
`;

export const NameSelect = styled.div`
  width: 100%;
  height: 36px;
  border: 1px solid ${light_blue_strong};
  color: ${light_blue_black};
  border-radius: 8px;
  padding: 0px 14px;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 15px;
`;

export const RadioWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
  padding: 0px 10px;
`;

export const NameList = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 16px 0px;
  gap: 16px;
`;

export const NameTap = styled.li<{ $checked: boolean }>`
  width: fit-content;
  padding: 10px 24px;
  font-size: 16px;
  color: ${(props) => props.$checked ? light_blue_black : light_blue_strong};
  background-color: ${(props) => props.$checked ? light_blue : 'transparent'};
  border-radius: 8px;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: ${light_blue_black};
  }
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
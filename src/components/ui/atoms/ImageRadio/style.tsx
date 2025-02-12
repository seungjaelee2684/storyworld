import styled from "styled-components";
import { light_blue_black, primary, primary_light } from "../../../../styles/color_pallete";

export const RadioInputContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  cursor: pointer;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${light_blue_black};
  font-size: 18px;
  font-weight: 500;
`;

export const RadioInput = styled.input`
  display: none;
`;

export const CustomRadio = styled.span`
  width: 16px;
  height: 16px;
  border: 1px solid ${primary_light};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  margin-right: 8px;
  cursor: pointer;

  // 체크된 경우 내부 점 추가
  ${RadioInput}:checked + &::after {
    content: "";
    width: 10px;
    height: 10px;
    background-color: ${primary};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
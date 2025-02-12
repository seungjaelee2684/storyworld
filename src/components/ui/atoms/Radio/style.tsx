import styled from "styled-components";
import { primary, primary_light } from "../../../../styles/color_pallete";

export const RadioInputContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 1.1rem;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  display: none;
`;

export const CustomRadio = styled.span`
  width: 14px;
  height: 14px;
  border: 1px solid ${primary_light};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  margin-right: 8px;
  cursor: pointer;

  // 체크된 경우 내부 점 추가
  ${RadioInput}:checked + &::after {
    content: "";
    width: 8px;
    height: 8px;
    background-color: ${primary};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
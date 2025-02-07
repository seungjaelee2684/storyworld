import styled from "styled-components";
import { light_blue_heavy, primary } from "../../../../styles/color_pallete";

export const InputLaneContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const InputLabelContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 0px 4px 8px 4px;
  user-select: none;
`;

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  gap: 6px;
`;

export const LabelText = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

export const EssentialSpan = styled.span`
  color: ${primary};
`;

export const ChoiceSpan = styled.span`
  font-size: 13px;
  color: ${light_blue_heavy};
`;

export const PasswordIcon = styled.span`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${light_blue_heavy};
  cursor: pointer;
`;
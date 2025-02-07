import styled from "styled-components";
import { light_blue, light_blue_heavy } from "../../../../styles/color_pallete";

export const LoginFormContainer = styled.form`
  width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 30px;
  padding: 60px 60px 80px 60px;
  border: 1px solid ${light_blue};
  border-radius: 10px;
  user-select: none;
`;

export const FormTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 8px;
  padding: 0px 0px 40px 4px;
`;

export const FormTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const FormSubTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${light_blue_heavy};
`;
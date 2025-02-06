import styled from "styled-components";
import { light_blue, light_blue_heavy } from "../../../../styles/color_pallete";

export const SignupFormContainer = styled.form`
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
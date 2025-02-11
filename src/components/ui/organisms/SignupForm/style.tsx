import styled from "styled-components";
import { light_blue } from "../../../../styles/color_pallete";

export const SignupFormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 30px;
  padding: 60px 60px 80px 60px;
  border: 1px solid ${light_blue};
  border-radius: 10px;
  user-select: none;

  @media screen and (max-width: 1040px) {
    padding: 0px;
    border: none;
  }
`;
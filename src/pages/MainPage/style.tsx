import styled from "styled-components";

export const MainContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  font-family: 'DungGeunMo';
  user-select: none;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 16px;
`;

export const LoginInputWrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 6px;
`;

export const LoginLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
  padding-left: 4px;
  user-select: none;
`;

export const LoginInput = styled.input`
  width: 320px;
  height: 38px;
  padding: 16px;
  border-radius: 8px;
  outline: none;
  border: 2px solid #818181;
  font-size: 14px;
  font-weight: 700;
  background-color: #424040;
  color: #fefefe;
`;

export const ButtonWrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 8px;
  margin-top: 100px;
`;

export const SignupButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 400;
  color: #868686;
`;
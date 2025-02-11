import styled from "styled-components";
import { light_blue, primary } from "../../../styles/color_pallete";

export const HeaderLayout = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid #e9e9e9;
  /* box-shadow: 0px 0px 8px 0px #2220202b; */
  padding: 0px 20px;
  transition: all 0.4s ease-in-out;
  user-select: none;

  @media screen and (max-width: 1040px) {
    height: 60px;
  }
`;

export const HeaderInlineContainer = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.a`
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const LogoImage = styled.img`
  width: 200px;
  height: 100%;
  object-fit: contain;

  @media screen and (max-width: 1040px) {
    width: 130px;
  }
`;

export const HeaderRightWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 1040px) {
    gap: 8px;
  }
`;

export const NavButton = styled.a`
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #595e5f;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: ${primary};
  }

  @media screen and (max-width: 1040px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const LoginText = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${light_blue};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  cursor: pointer;
`;
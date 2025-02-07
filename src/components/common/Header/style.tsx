import styled from "styled-components";
import { primary } from "../../../styles/color_pallete";

export const HeaderLayout = styled.header`
  width: 100%;
  height: 60px;
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

export const HeaderRightWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const NavigateWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
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
`;

export const ButtonWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
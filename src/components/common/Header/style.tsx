import styled from "styled-components";

export const HeaderLayout = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #fefefe;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 20;
  box-shadow: 0px 0px 8px 0px #2220202b;
  padding: 10px 0px;
  transition: all 0.4s ease-in-out;
  border-radius: 20px 20px 0px 0px;
`;

export const HeaderInlineContainer = styled.nav`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
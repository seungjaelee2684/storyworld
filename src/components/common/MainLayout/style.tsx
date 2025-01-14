import styled from "styled-components";
import { FadeIn } from "../../../styles/animation";

export const MainLayoutContainer = styled.article<{ $src: string }>`
  width: 100%;
  min-height: 100dvh;
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow-y: hidden;
`;

export const MainBackground = styled.div<{ $start: boolean }>`
  background-color: #222020ca;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  animation: ${FadeIn} ${(props) => props.$start ? `1s forwards` : 'none'};
`;

export const MainContentContainer = styled.div<{ $start: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  color: #fefefe;
  overflow-y: auto;
  padding: 60px 0px;
  opacity: ${(props) => props.$start ? 0 : 1};
  animation: ${FadeIn} ${(props) => props.$start ? `1s 0.5s forwards` : 'none'};
`;
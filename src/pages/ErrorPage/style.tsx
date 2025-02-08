import styled, { keyframes } from "styled-components";
import { light_blue, light_blue_black, light_blue_heavy, light_blue_strong } from "../../styles/color_pallete";

const location: { [key: string]: string } = {
  front: `transform: translateZ(50px);`,
  back: `transform: rotateY(180deg) translateZ(50px);`,
  left: `transform: rotateY(-90deg) translateZ(50px);`,
  right: `transform: rotateY(90deg) translateZ(50px);`,
  top: `transform: rotateX(90deg) translateZ(50px);`,
  bottom: `transform: rotateX(-90deg) translateZ(50px);`
};

const RotateCube = keyframes`
  from {
    transform: rotateX(-30deg) rotateY(45deg);
  }

  to {
    transform: rotateX(-30deg) rotateY(405deg);
  }
`;

export const ErrorContainer = styled.section`
  width: 1040px;
  height: calc(100dvh - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1040px) {
    width: 100%;
  }
`;

export const ErrorTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${light_blue_black};
  text-shadow: ${light_blue} 0px 0px 10px;
  margin: 100px 0px 30px 0px;
`;

export const ErrorSubTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 500;
  color: ${light_blue_strong};
  line-height: 150%;
`;

export const BackLink = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
  margin-top: 60px;
  color: ${light_blue_heavy};
  cursor: pointer;

  &:hover {
    gap: 16px;
  }
`;

export const Scene = styled.div`
  width: 100px;
  height: 100px;
  perspective: 600px;
`;

export const Cube = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateX(-30deg) rotateY(45deg);
  animation: ${RotateCube} 5s infinite linear;
  user-select: none;
`;

export const Face = styled.div<{
  $face: string
}>`
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid ${light_blue};
  ${(props) => location[props.$face]};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  line-height: 100px;
  font-weight: 700;
  color: ${light_blue_black};
`;
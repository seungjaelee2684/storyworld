import styled from "styled-components";

const size: { [key: string]: string } = {
  small: `
    min-width: 40px;
    width: 40px;
    min-height: 40px;
    height: 40px;
  `,
  medium: `
    min-width: 60px;
    width: 60px;
    min-height: 60px;
    height: 60px;
  `,
  large: `
    min-width: 80px;
    width: 80px;
    min-height: 80px;
    height: 80px;
  `,
  extralarge: `
    min-width: 100%;
    width: 100%;
    min-height: 240px;
    height: 240px;
  `,
};

const round: { [key: string]: string } = {
  small: `12px`,
  medium: `16px`,
  large: `20px`,
  extralarge: `10px`
};

export const ImageContainer = styled.div<{
  $size: string,
  $rounded: boolean,
}>`
  ${(props) => size[props.$size]};
  border-radius: ${(props) => props.$rounded ? '100%' : round[props.$size]};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: all 0.2s;
`;
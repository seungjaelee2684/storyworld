import styled from "styled-components";
import { light_blue_black, light_blue_heavy, primary_light } from "../../../../styles/color_pallete";
import { ImageWrapper } from "../../atoms/ImageBox/style";

// const size: { [key: string]: string } = {
//   small: `

//   `,
//   medium: `

//   `,
//   large: `
  
//   `
// };

export const CardContainer = styled.li<{
  $full: boolean,
}>`
  width: 100%;
  min-height: 320px;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: ${primary_light};
    ${ImageWrapper} {
      width: 110%;
      height: 110%;
    }
  }
`;

export const CardBox = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 16px;
`;

export const CardTitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 10px;
  padding: 0px 4px;
`;

export const CardTitle = styled.p`
  width: 100%;
  text-align: start;
  font-size: 20px;
  font-weight: 400;
`;

export const CardSubTitle = styled.p`
  width: 100%;
  text-align: start;
  font-size: 14px;
  font-weight: 400;
  color: ${light_blue_heavy};
`;

export const CardWriter = styled.p`
  text-align: start;
  font-size: 16px;
  font-weight: 400;
  color: ${light_blue_black};
`;
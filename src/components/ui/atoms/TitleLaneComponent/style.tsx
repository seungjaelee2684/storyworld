import styled, { css, CSSProp } from "styled-components";
import { light_blue_heavy } from "../../../../styles/color_pallete";

const size: { [key: string]: CSSProp } = {
    small: css`
        font-size: 18px;
    `,
    medium: css`
        font-size: 24px;
    `,
    large: css`
        font-size: 30px;
    `,
};

const mobileSize: { [key: string]: CSSProp } = {
    small: css`
        font-size: 12px;
    `,
    medium: css`
        font-size: 14px;
    `,
    large: css`
        font-size: 17px;
    `,
};

export const ListTopLane = styled.div<{
    $unpadding: boolean
}>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: ${(props) => props.$unpadding ? '0px 0px' : '0px 16px'};
  user-select: none;
`;

export const ListTitle = styled.div<{ $size: string }>`
  ${(props) => size[props.$size]};
  font-weight: 700;
  
  @media screen and (max-width: 1040px) {
    ${(props) => mobileSize[props.$size]};
  }
`;

export const MoreButton = styled.a`
    font-size: 16px;
    color: ${light_blue_heavy};

    @media screen and (max-width: 1040px) {
        font-size: 10px;
    }
`;
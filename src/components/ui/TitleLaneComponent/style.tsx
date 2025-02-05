import styled, { css, CSSProp } from "styled-components";
import { light_blue_heavy } from "../../../styles/color_pallete";

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

export const ListTopLane = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 0px 16px;
`;

export const ListTitle = styled.div<{ $size: string }>`
  ${(props) => size[props.$size]};
  font-weight: 700;
  user-select: none;
`;

export const MoreButton = styled.a`
    font-size: 16px;
    color: ${light_blue_heavy};
`;
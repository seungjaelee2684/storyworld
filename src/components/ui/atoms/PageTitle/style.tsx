import styled from "styled-components";
import { light_blue_heavy } from "../../../../styles/color_pallete";

export const PageTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 24px;
    padding: 0px 4px;
    user-select: none;
`;

export const PageTitleWrapper = styled.h1`
    font-size: 36px;
    font-weight: 600;
    line-height: 100%;
`;

export const PageSubTitle = styled.p`
    text-align: start;
    font-size: 20px;
    font-weight: 400;
    color: ${light_blue_heavy};
`;
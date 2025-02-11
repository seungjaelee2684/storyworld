import styled from "styled-components";
import { light_blue_heavy } from "../../../../styles/color_pallete";

export const PageTitleContainer = styled.div<{ $between: boolean }>`
    width: ${(props) => props.$between ? '100%' : 'fit-content'};
    display: flex;
    flex-direction: ${(props) => props.$between ? 'row' : 'column'};
    justify-content: ${(props) => props.$between ? 'space-between' : 'center'};
    align-items: ${(props) => props.$between ? 'end' : 'start'};
    gap: 24px;
    padding: 0px 4px;
    user-select: none;

    @media screen and (max-width: 1040px) {
        gap: 16px;
        padding: 0px;
    }
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 24px;

    @media screen and (max-width: 1040px) {
        gap: 8px;
    }
`;

export const PageTitleWrapper = styled.h1`
    font-size: 36px;
    font-weight: 600;
    line-height: 100%;

    @media screen and (max-width: 1040px) {
        font-size: 18px;
    }
`;

export const PageSubTitle = styled.p`
    text-align: start;
    font-size: 20px;
    font-weight: 400;
    color: ${light_blue_heavy};

    @media screen and (max-width: 1040px) {
        font-size: 14px;
    }
`;
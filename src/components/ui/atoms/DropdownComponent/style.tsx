import styled, { css, RuleSet } from "styled-components";
import { light_blue, light_blue_heavy } from "../../../../styles/color_pallete";

const width: { [key: string]: string } = {
    small: `300px;`,
    medium: `400px;`,
    large: `500px;`
};

const size: { [key: string]: RuleSet } = {
    small: css`
        height: 30px;
        min-height: 30px;
        padding: 0px 12px;
        font-size: 14px;
    `,
    medium: css`
        height: 36px;
        min-height: 36px;
        padding: 0px 14px;
        font-size: 15px;
    `,
    large: css`
        height: 42px;
        min-height: 42px;
        padding: 0px 16px;
        font-size: 16px;
    `
};

const topSize: { [key: string]: RuleSet } = {
    small: css`
        top: 34px;
    `,
    medium: css`
        top: 40px;
    `,
    large: css`
        top: 50px;
    `
};

export const DropdownButton = styled.button<{
   $full: boolean | undefined,
   $width: string,
   $size: string,
   $open: boolean;
}>`
    width: ${(props) => props.$full ? '100%' : width[props.$width]};
    ${(props) => size[props.$size]};
    border-radius: 8px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    transition: all 0.2s;
    color: ${light_blue_heavy};
    border: ${(props) => props.$open ? `1px solid ${light_blue_heavy}` : `1px solid ${light_blue}`};
    font-family: "Pretendard";
    cursor: pointer;

    &:hover {
        border: 1px solid ${light_blue_heavy};
    }
`;

export const DropdownMenu = styled.ul<{
    $size: string
}>`
    width: 100%;
    height: fit-content;
    max-height: 400px;
    background-color: #ffffff;
    box-shadow: 0px 0px 8px 0px ${light_blue_heavy}80;
    position: absolute;
    ${(props) => topSize[props.$size]};
    left: 0;
    z-index: 10;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    border-radius: 8px;
    border: 1px solid ${light_blue_heavy};
    padding: 8px;
    box-sizing: border-box;
`;

export const DropdownMenuButton = styled.li<{
    $size: string
}>`
    width: 100%;
    ${(props) => size[props.$size]};
    padding: 0px 16px;
    display: flex;
    justify-content: start;
    align-items: center;
    transition: all 0.2s;
    border-radius: 4px;
    font-family: "Pretendard";
    box-sizing: border-box;

    &:hover {
        background-color: ${light_blue};
    }
`;
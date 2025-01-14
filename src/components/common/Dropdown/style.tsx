import styled, { css, RuleSet } from "styled-components";

const width: { [key: string]: string } = {
    small: `200px;`,
    medium: `240px;`,
    large: `300px;`
};

const size: { [key: string]: RuleSet } = {
    small: css`
        height: 28px;
        min-height: 28px;
        font-size: 14px;
    `,
    medium: css`
        height: 38px;
        min-height: 38px;
        font-size: 16px;
    `,
    large: css`
        height: 48px;
        min-height: 48px;
        font-size: 18px;
    `
};

const topSize: { [key: string]: RuleSet } = {
    small: css`
        top: 30px;
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
   $size: string,
   $open: boolean;
}>`
    width: ${(props) => props.$full ? '100%' : width[props.$size]};
    ${(props) => size[props.$size]};
    border-radius: 8px;
    position: relative;
    padding: 6px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    transition: all 0.2s;
    font-weight: 500;
    border: ${(props) => props.$open ? '2px solid #d3d3d3' : '2px solid #818181'};
    background-color: #424040;
    color: #ffffff;
    cursor: pointer;

    &:hover {
        border: 2px solid #d3d3d3;
    }
`;

export const DropdownMenu = styled.ul<{
    $size: string
}>`
    width: 100%;
    height: 400px;
    max-height: 400px;
    background-color: #424040ca;
    box-shadow: 0px 0px 8px 0px #33333380;
    position: absolute;
    ${(props) => topSize[props.$size]};
    left: 0;
    z-index: 10;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    border-radius: 8px;
    border: 1px solid #818181;
    padding: 8px;
`;

export const DropdownMenuButton = styled.li<{
    $size: string
}>`
    width: 100%;
    ${(props) => size[props.$size]};
    padding: 0px 12px;
    display: flex;
    justify-content: start;
    align-items: center;
    color: #ffffff;
    transition: all 0.2s;
    border-radius: 4px;

    &:hover {
        background-color: #6b6767;
    }
`;
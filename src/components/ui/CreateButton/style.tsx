import styled from "styled-components";
import { light_blue, light_blue_heavy } from "../../../styles/color_pallete";

export const CreateButtonContainer = styled.a<{
    $size: string,
    $full: boolean,
}>`
    width: ${(props) => props.$full ? '100%' : '400px'};
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 24px;
    cursor: pointer;
    user-select: none;
`;

export const CreateIconBox = styled.div`
    min-width: 60px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: ${light_blue};
`;

export const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;
`;

export const CreateTitle = styled.label`
    width: fit-content;
    font-size: 20px;
    font-weight: 500;
`;

export const CreateSubTitle = styled.p`
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    color: ${light_blue_heavy};
    text-align: start;
`;
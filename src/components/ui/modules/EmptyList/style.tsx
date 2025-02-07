import styled from "styled-components";
import { light_blue_strong } from "../../../../styles/color_pallete";

export const EmptyContainer = styled.div`
    width: 100%;
    height: 300px;
    border: 2px dashed ${light_blue_strong};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    user-select: none;
`;

export const EmptyTitle = styled.label`
    font-size: 24px;
    font-weight: 600;
    line-height: 100%;
`;

export const EmptySubTitle = styled.p`
    font-size: 18px;
    font-weight: 500;
    line-height: 100%;
    color: ${light_blue_strong};
    white-space: pre-line;
    margin-bottom: 24px;
`;
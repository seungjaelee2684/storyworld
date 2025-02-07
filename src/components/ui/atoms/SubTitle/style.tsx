import styled from "styled-components";
import { light_blue_strong } from "../../../../styles/color_pallete";

export const SubTitleContainer = styled.div<{
    $full: boolean,
}>`
    width: ${(props) => props.$full ? '100%' : 'fit-content'};
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 8px;
    padding: 0px 4px;
    font-size: 14px;
    font-weight: 500;
    color: ${light_blue_strong};
`;
import styled from "styled-components";

export const StoryListContainer = styled.section`
    width: 1040px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 60px;
`;

export const ListContainer = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
`;
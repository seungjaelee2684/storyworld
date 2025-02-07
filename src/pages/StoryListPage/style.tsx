import styled from "styled-components";

export const StoryListContainer = styled.section`
    width: 1040px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 40px;

    @media screen and (max-width: 1040px) {
        width: 100%;
    }
`;

export const ListContainer = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 24px;
`;
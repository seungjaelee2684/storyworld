import styled from "styled-components";

export const UploadContainer = styled.section`
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 60px;

    @media screen and (max-width: 1040px) {
        width: 100%;
    }
`;
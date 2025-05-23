import styled from "styled-components";

export const UploadFormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 60px;

    @media screen and (max-width: 1040px) {
        gap: 40px;
    }
`;
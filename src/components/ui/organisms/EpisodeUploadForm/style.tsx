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

export const CharacterListWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 12px;
    flex-wrap: wrap;
`;

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 24px;
`;
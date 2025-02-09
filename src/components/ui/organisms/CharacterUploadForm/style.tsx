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

export const RadioWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 60px;
    margin-top: 20px;
`;

export const CheckboxWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
`;
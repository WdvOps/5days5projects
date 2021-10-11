import styled from "styled-components"

export const Container = styled.div`
    background-color: #033DA1;
    color: #62D6FF;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`;

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji {
        font-size: 50px;
        margin-top: 150px;
        margin-bottom: 30px;
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const UploadForm = styled.form`
    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;

    input[type=submit] {
        border: 0;
        color: #000;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 5px;
        margin: 0 20px;
        cursor: pointer;
        transition: .2s;

        &: hover {
            background-color: #dadfe1;
        }
    }
`;

export const Footer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
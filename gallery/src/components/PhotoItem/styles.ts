import styled from "styled-components";

export const Container = styled.div`
   background-color: #3D3F43;
   border-radius: 10px;
   padding: 10px;

   img {
       max-width: 100%;
       display: block;
       margin-bottom: 10px;
       border-radius: 10px;
   }

   button {
    display: block;
    border: 0;
    color: #000;
    padding: 6px 16px;
    position: relative;
    bottom: 2;
    font-size: 15px;
    border-radius: 10px;
    margin: 10px auto 0 auto;
    cursor: pointer;
    &:hover {
        background-color: #dadfe1;
    }
}
`;
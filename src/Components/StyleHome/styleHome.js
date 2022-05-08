import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: black;
`
export const Search = styled.div`
height: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

& > h2{
    font-size: 40px;
    color: whitesmoke;
    margin: 20px auto 0;
}

& > form {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px auto;
}

& > input {
    margin-top: 20px;
    width: 80%;
    height: 40px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
}
`
export const Boxes = styled.div`

`
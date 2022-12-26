import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const InputText = styled.input`
    /* border-color: ${props => props.error ? "red": "green"}; */
    text-align: center;
    border-radius: 5px;
    margin: 10px;
    height: 30px;
    width: 100%;
`;

export const Button = styled.button`
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 5px;
    margin-top: 10px;
    border: none;
    color: #fff;
    font-weight: bold;
    &:hover{
        cursor: pointer;
        background-color: black;
    }
`;



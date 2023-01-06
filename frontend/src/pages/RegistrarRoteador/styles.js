import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        margin-bottom: 30px;
    }
`;

export const InputText = styled.input`
    display: flex;
    text-align: center;
    min-height: 38px;
    outline: 0!important;
    background-color: hsl(0, 0%, 100%);
    border-color: hsl(0, 0%, 80%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    margin: 2px;
    padding-bottom: 2px;
    padding-top: 2px;
    color: hsl(0, 0%, 20%);
    box-sizing: border-box;
    font-size: 16px;
    width: 100%;

    ::placeholder{
        color: grey;
      }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    

`;

export const Button = styled.button`
    background-color: ${props => props.disabled ? "#666" : "#1d1b31"};
    width: 100%;
    min-height: 48px;
    margin-top: 10px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    transition: 0.5s;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
    &:hover{
        background-color: #1d1b20;
        cursor: pointer;
    }
`;
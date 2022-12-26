import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: #11101d;
    width: 500px;
    padding: 10px;
    height: 300px;
    border-radius: 10px;
`;

export const LogoContainer = styled.div``;

export const Logomarca = styled.img`
    width: 160px;
`;

export const LogoDescription = styled.p`
    color: #fff;
`;

export const InputsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 30px;
`;

export const FormTitle = styled.h2`
    color: #fff;
    margin-bottom: 20px;
`;

export const Input = styled.input`
    margin: 5px 0 5px 0;
    height: 35px;
    border-radius: 5px;
    border: none;
    text-align: center;
    width: 200px;
`;

export const Button = styled.button`
    width: 100%;
    height: 30px;
    background-color: red;
    border-radius: 5px;
    margin-top: 10px;
    border: none;
    color: #fff;
    font-weight: bold;
    &:hover{
        border: 1px solid #fff;
        width: 101%;
        cursor: pointer;
    }
`;



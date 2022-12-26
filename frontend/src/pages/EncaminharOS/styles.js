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
    margin-top: 2px;
    padding-top: 0.8px;
    border: none;
    color: #fff;
    font-weight: bold;
    &:hover{
        cursor: pointer;
        background-color: black;
    }
`;


export const ContainerLeft = styled.div`
    width: 80%;
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: column;
`;

export const ContainerRight = styled.div`
    display: flex;
    align-items: center;

    i{
        padding: 5px;
        background-color: #1d1b31;
        color: #fff;
        margin: 2px;
        border-radius: 5px;
        &:hover{
            cursor: pointer;
            background-color: #777683;
        }
    }
`;

export const Nome = styled.h4`
    
`;

export const Id = styled.h6``;

export const Endereco = styled.h6``;

export const Container1 = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    border: 1px solid #666;
    padding: 5px;
    width: 60%;
    height: 70px;
    border-radius: 5px;
    margin: 5px;
    &:hover {
        background-color: black;
        color:white;
    }
`;
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
    width: 30px;
    height: 30px;
    background-color: black;
    border-radius: 5px;
    margin-top: 2px;
    padding-top: 2px;
    border: none;
    color: #fff;
    font-weight: bold;
    &:hover{
        cursor: pointer;
        background-color: #333333;
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
    padding-left: 16%;
`;

export const Id = styled.h6`
    padding-left: 16%;
`;

export const Endereco = styled.h6`
    padding-left: 16%;
`;

export const Container1 = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    border: 1px solid #666;
    padding: 5px;
    width: 40rem;
    height: 4rem;
    border-radius: 5px;
    margin: 5px;
    &:hover {
        background-color: #333333;
        color:white;
    }
`;


export const ButtonEncaminhar = styled.button`
    width: 100px;
    height: 30px;
    background-color: black;
    border-radius: 5px;
    margin-top: 10px;
    border: none;
    color: #fff;
    font-weight: bold;
    &:hover{
        cursor: pointer;
        background-color: #333333;
    }
`;
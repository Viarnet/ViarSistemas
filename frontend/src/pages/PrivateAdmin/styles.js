import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const InputText = styled.input`
    border-color: ${props => props.error ? "red": "none"};
    text-align: center;
    border-radius: 5px;
    margin: 10px;
    height: 30px;
`;
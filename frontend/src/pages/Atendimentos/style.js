import styled from 'styled-components';


export const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    width: 100%;
    justify-content: center;
    background-color: #E4E9F7;
`;

export const Input = styled.input`
    border-radius: 8px;
    width: 150px;
    text-align: center;

    input:focus{
        border: 10px solid #2F4F4F;
    }
`;
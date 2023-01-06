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

export const Select = styled.select`
    border-radius: 8px;
    width: 150px;
    text-align: center;

    select:focus{
        border: 10px solid #2F4F4F;
    }
`;

export const CardRoteador = styled.div`
    border: 1px solid black;
    padding: 10px;
    border-radius: 10px;
    width: 300px;
    margin: 20px;
    
`;

export const Graficos = styled.div`
    display: flex;
    justify-content: center;
`;
import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: 10rem;
    height: 2.2rem;
    padding: 5px 10px 5px 10px;
    background-color: ${props => props.disabled ? "#666" : props => props.backgroundColor ? props.backgroundColor : "black"};
    border-radius: 5px;
    margin: 10px;
    border: none;
    color: ${props => props.color ? props.color : "#fff"};
    font-weight: bold;
    &:hover{
        cursor: pointer;
        background-color: ${props => props.backgroundColorHover ? props.backgroundColorHover : "#333333"};
    }
`;
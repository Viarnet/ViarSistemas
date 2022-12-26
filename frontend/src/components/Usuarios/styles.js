import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    border: 1px solid #666;
    padding: 5px;
    width: 60%;
    height: 50px;
    border-radius: 5px;
    margin: 5px;
    &:hover {
        background-color: #E8E8EA;
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

export const Name = styled.h4`
    
`;

export const Email = styled.h6``;
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    border: 1px solid #666;
    padding: 5px;
    width: 16rem;
    height: 6rem;
    border-radius: 8px;
    margin: 5px;
    
`;


export const Button = styled.button`
    width: 20px;
    height: 20px;
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
    padding-left: 25px;

    h6{
        font-size: 1rem;
        font-family: Roboto;
    }


    p{
        padding-top: 1.2rem;
        font-family: Roboto;
        font-size: 3rem;
        
    }
`;

export const ContainerRight = styled.div`
    display: inline;
    padding-top: 1.5rem;
    padding-right: 1rem;

    button{
        
        width: 1.5rem;
        height: 1.5rem;
        overflow: none;
        border-radius: 1rem;
        justify-content: center;

    }
    
    
    i{
        width: 100%;
        height: 100%;
        
        padding-top: 0.3rem;
        
        background-color: black;
        color: #fff;
        &:hover{
            cursor: pointer;
            background-color: #1d1b31;
        }
    }

    button::-webkit-scrollbar {
        display: none;
      }
`;

export const DivPai = styled.div`
    padding-left: 20px;
`;


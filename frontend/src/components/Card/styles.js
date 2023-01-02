import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    border: 1px solid #666;
    padding: 5px;
    width: 16rem;
    height: 8rem;
    border-radius: 8px;
    margin: 5px;
    
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
    padding-left: 25px;

    h6{
        font-size: 1rem;
        font-family: Roboto;
    }


    p{
        padding-top: 2.5rem;
        font-family: Roboto;
        font-size: 5rem;
        
    }
`;

export const ContainerRight = styled.div`
    display: inline;
    padding-top: 3.6rem;
    padding-right: 1rem;

    button{
        
        width: 2rem;
        height: 2rem;
        overflow: none;
        border-radius: 1rem;
        justify-content: center;

    }
    
    
    i{
        width: 100%;
        height: 100%;
        
        padding-top: 7px;
        
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
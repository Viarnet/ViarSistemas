import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`;

export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(49,49,49,0.8);
`;

export const ModalContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 8px;
    max-width: 800px;
    min-width: 500px;
    min-height: 200px;
    font-size: 12px;
`;



export const IconClose = styled.i`
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    text-align: center;
    position: absolute;
    right: 0;
    top: 0;
    margin: 10px;
    font-size: 18px;
    transition: 0.2s;
    &:hover{
        background-color: gray;
    }
`;

export const Title = styled.h2`
`;
export const Subtitle = styled.h4`
`;
export const ComponentContainer = styled.div``;
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const Body = styled.div`
    margin: 10px;
    margin-top: 50px;
    margin-bottom: 50px;
`;
export const Footer = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    bottom: 0;
    margin: 10px;
`;
export const ButtonSim = styled.button``;
export const ButtonNao = styled.button``;
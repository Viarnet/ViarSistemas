import "./styles.css"
import { Container1, ContainerLeft, ContainerRight, Nome, Endereco, Id } from "../../pages/EncaminharOS/styles";
import React, { useState, Component, useEffect } from "react";
import ListNumberPages from "../ListNumberPages";
export function Pagenation({ osPerPage, totalOs, os, paginate }) {

    const [selectedId, setSelectedId] = useState(1);
    const [pages, setPages] = useState([]);
    const pageNumbers = [];

    useEffect(() => {
        for (let i = 1; i <= Math.ceil(totalOs / osPerPage); i++) {
            pageNumbers.push(i);
        }

        if (pageNumbers[selectedId - 1] == 1) {
            setPages([pageNumbers[selectedId - 1], pageNumbers[selectedId], pageNumbers[selectedId + 1]]);
        }else {
            if(pageNumbers[selectedId - 1] > 1){
                setPages([pageNumbers[selectedId - 2], pageNumbers[selectedId - 1], pageNumbers[selectedId]]);
            }
        }
        if (pageNumbers[selectedId - 1] == Math.ceil(totalOs / osPerPage)) {
            setPages([pageNumbers[selectedId - 3], pageNumbers[selectedId - 2], pageNumbers[selectedId -1]]);
        }
        
    }, [selectedId])




    const handleClick = (id) => {
        setSelectedId(id);
        paginate(id);
    };
    const handleBackInit = (id) => {
        setSelectedId(1);
        paginate(1);
    };
    const handleBackOne = (id) => {
        if (selectedId == 1) {
            setSelectedId(selectedId);
            paginate(selectedId);
        } else {
            setSelectedId(selectedId - 1);
            paginate(selectedId - 1);
        }
    };
    const handleFrontEnd = (id) => {
        setSelectedId(Math.ceil(totalOs / osPerPage));
        paginate(Math.ceil(totalOs / osPerPage));
    };
    const handleFrontOne = (id) => {
        if (selectedId == Math.ceil(totalOs / osPerPage)) {
            setSelectedId(selectedId);
            paginate(selectedId);
        } else {
            setSelectedId(selectedId + 1);
            paginate(selectedId + 1);
        }

    };


    return (
        <>
        <div className="container-principal">
            {os.map((ordem, index) => (
                <Container1 key={ordem.id} id='divOS'>
                    <ContainerLeft>
                        <Nome>{ordem.nomeCliente}</Nome>
                        <Endereco>{ordem.endereco}</Endereco>
                        <Id>{ordem.id}</Id>
                    </ContainerLeft>
                    <ContainerRight>
                        <input type="checkbox" className='check' onChange={(e) => handleonChange(e, index)} />
                    </ContainerRight>
                </Container1>
            ))}
            </div>
            <nav>
                <ul className="pagination">
                    <button onClick={handleBackInit}>{"<<-"}</button>
                    <button onClick={handleBackOne}>{"<-"}</button>
                    {pages.map(number => (

                        // <li key={number} className={`page-item`}>
                        //     <div className="teste" >
                        //     <a href="#" onClick={() => paginate(number)} className="page-link">
                        //         {number}
                        //     </a>
                        //     </div>
                        // </li>
                        <ListNumberPages
                            number={number}
                            key={number}
                            active={selectedId === number}
                            Click={() => handleClick(number)}
                        />
                    ))}
                    <button onClick={handleFrontOne}>{"->"}</button>
                    <button onClick={handleFrontEnd}>{"->>"}</button>
                </ul>
                <small style={{display: 'flex', justifyContent:'center', marginBottom: "-30px"}}>{`Página ${selectedId} de ${Math.ceil(totalOs / osPerPage)}`}</small>
            </nav>
        
        </>
    );
}
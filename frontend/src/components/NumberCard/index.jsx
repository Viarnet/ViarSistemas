import "./styles.css";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ModalComponent } from "../ModalComponent";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import axios from "axios";

const columns = [
  { id: 'numero', label: 'NUMERO', minWidth: 170 },
  { id: 'cidade', label: 'CIDADE', minWidth: 100 },
  { id: 'actions', label: 'AÇÕES', minWidth: 100 },

];


export default function NumberCard(numero) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);
  const [selectNumber, setSelectNumber] = React.useState(null);
  const [linhaSelecionada, setLinhaSelecionada] = React.useState(null);
  const [cidadeSelecionada, setCidadeSelecionada] = React.useState(null);
  const [reservado, setReservado] = React.useState("");
  const auth = React.useContext(AuthContext);
  const [isBody, setIsBody] = React.useState();


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleReserve = async() => {
    await numero.handleReservar({linha: linhaSelecionada, cidade: cidadeSelecionada, reservado: reservado, user: auth.user.name})
    setLinhaSelecionada(null);
    setCidadeSelecionada(null);
    setReservado(null);
    auth.setModalOpen(false);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function ModalBody({ linha, cidade }){
    return (
      <>
        <h2>LINHA: {linha}</h2>
        <h5>CIDADE: {cidade}</h5>
        <br/>
        Reservado para: <input type='text' style={{textAlign: 'center'}} value={reservado} onChange={(e)=> setReservado(e.target.value)}/>
        <br/>
        <br/>
      </>
    )
  };

  const handleModalOpen = ({ linha, cidade }) => {
    setIsBody(<ModalBody linha={linha} cidade={cidade}/>)
    setLinhaSelecionada(linha);
    setCidadeSelecionada(cidade);
    auth.setModalOpen(true);
  };


  return (
    <>
      {auth.modalOpen &&
        <ModalComponent
          isConfirm={true}
          handleYes={handleReserve}
          isTitle={"Deseja Reservar esse Numero?"}
        >
          {isBody}
        </ModalComponent>}
      <Paper sx={{ width: "94vw", overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 445, width: "100%" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead >
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {numero.data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row}>

                      <TableCell key={row}>
                        {row}
                      </TableCell>
                      <TableCell>
                        {numero.cidade}
                      </TableCell>
                      <TableCell>
                        {<button type="button" className="button-reservar" onClick={() => handleModalOpen({ linha: row, cidade: numero.cidade })}>Reservar</button>}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[7, 25, 100]}
          component="div"
          count={numero.data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  )
}

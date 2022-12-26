import { Container} from "./style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Usuarios } from "../../components/Usuarios";
import { ModalConfirm } from "../../components/ModalConfirm";
import { Loading } from "../../components/Loading";
import { ModalEdit } from "../../components/ModalEdit";
import { MiniLoading } from "../../components/MiniLoading";


export function Listar(){
    const auth = useContext(AuthContext);
   
    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isEditOpen, setEditOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{
        (async()=>{
            await axios.get('http://localhost:3333/users',{
                headers: {
                    'Authorization': `Bearer ${auth.token1}`
                  }
            }).then(({data})=>{
                setUsuarios(data.users)
                setIsLoading(false);
            })
        })()
    },[]);

    function handlesetIsOpen(){
        setIsOpen(!isOpen);
    }
    function handlesetEditOpen(email, usuario){
        setEditOpen(!isEditOpen);
    }

    async function handleDeleteUser(email){
         await axios.get(`http://localhost:3333/delete/${email}`,{
                headers: {
                    'Authorization': `Bearer ${auth.token1}`
                  }
            }).then(({data})=>{
                setUsuarios(data.users)
                handlesetIsOpen();
            })
    }

    async function handleOnSubmit(nome ,email,setor,id) {
        await axios.post('http://localhost:3333/update', {
          name: nome,
          email,
          role: Number(setor),
          id_colaborador: Number(id)
        }).then(({ data }) => {
          setUsuarios(data.users)
          handlesetEditOpen();
          toast.success(`Cadastro ${email} atualizado com sucesso!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
      }

    function handleModalOpen(email, usuario){
        setEmail(email);
        setUsuario(usuario);
        handlesetIsOpen();
        
       
    }
    function handleModalEditOpen(email, usuario){
        setEmail(email);
        setUsuario(usuario);
        handlesetEditOpen();
    }

    return (
        <Container>
            
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="dark"
            />
            {isOpen && <ModalConfirm usuario={usuario} email={email} handleDeleteUser={handleDeleteUser} handlesetIsOpen={handlesetIsOpen}/>}
            {isEditOpen && <ModalEdit handleModalEditOpen={handleModalEditOpen} usuario={usuario} email={email} handleOnSubmit={handleOnSubmit}/>}
            <h1>Usuarios Cadastrados</h1>
            {isLoading && <MiniLoading/>}
            {usuarios.map((usuario)=> <Usuarios usuario={usuario.name} email={usuario.email} id={usuario.id} handleModalOpen={handleModalOpen} handleModalEditOpen={handleModalEditOpen}key={usuario.id}/> )}
        </Container>
    );
}

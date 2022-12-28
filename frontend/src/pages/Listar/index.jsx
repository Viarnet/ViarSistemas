import { Container} from "./style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Usuarios } from "../../components/Usuarios";
import { MiniLoading } from "../../components/MiniLoading";
import { ModalComponent } from "../../components/ModalComponent";
import { FormContainerEdit } from "../../components/FormContainerEdit";


export function Listar(){
    const auth = useContext(AuthContext);
   
    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [isTitle, setIsTitle] = useState("");
    const [isBody, setIsBody] = useState();
    const [isConfirm, setIsConfirm] = useState();

    useEffect(()=>{
        (async()=>{
            await axios.get('http://192.168.0.95:3333/users',{
                headers: {
                    'Authorization': `Bearer ${auth.token1}`
                  }
            }).then(({data})=>{
                setUsuarios(data.users)
                setIsLoading(false);
            })
        })()
    },[]);

    async function handleDeleteUser(){
         await axios.get(`http://192.168.0.95:3333/user/${email}/delete`,{
                headers: {
                    'Authorization': `Bearer ${auth.token1}`
                  }
            }).then(({data})=>{
                setUsuarios(data.users)
                auth.setModalOpen(false);
            })
    }

    async function handleOnSubmit(nome ,email,setor,id) {
        //setIsLoading(true);
        await axios.post('http://192.168.0.95:3333/users/update', {
          name: nome,
          email,
          role: Number(setor),
          id_colaborador: Number(id)
        }).then(({ data }) => {
          setUsuarios(data.users);
          auth.setModalOpen(false);
          //setIsLoading(false);
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

    function DeleteModalComponent(){
        return (
            <>
            <h2>{usuario}</h2>
            <h3>{email}</h3> 
            </>
        )
    }

    function handleModalOpen(email, usuario){
        setEmail(email);
        setUsuario(usuario);
        setIsTitle("Deseja Excluir esse Usuario?")
        setIsBody(<DeleteModalComponent />)
        setIsConfirm(true);
        auth.setModalOpen(true);       
    }
    function handleModalEditOpen(email, usuario){
        setEmail(email);
        setUsuario(usuario);
        setIsTitle("Atualizar Cadastro")
        setIsBody(<FormContainerEdit email={email} handleOnSubmit={handleOnSubmit} loading={isLoading}/>)
        setIsConfirm(false);
        auth.setModalOpen(true);
    }

    return (
        <Container>
            {auth.modalOpen && <ModalComponent
            isTitle={isTitle}
            isConfirm={isConfirm}
            handleYes={handleDeleteUser}
            >
            {isBody}
            </ModalComponent> }
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
            <h1>Usuarios Cadastrados</h1>
            {isLoading && <MiniLoading/>}
            {usuarios.map((usuario)=> <Usuarios usuario={usuario.name} email={usuario.email} id={usuario.id} handleModalOpen={handleModalOpen} handleModalEditOpen={handleModalEditOpen}key={usuario.id}/> )}
        </Container>
    );
}

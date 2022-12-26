import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Button, Container, FormContainer, FormTitle, Input, InputsContainer, LogoContainer, LogoDescription, Logomarca } from "./style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {
    const auth = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailInput = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                navigate("/");
            } else {
                toast.error('Email ou Senha Incorreto!', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
        }
    }

    return (
        <>
        <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        
        <Container>
        <FormContainer>
            <LogoContainer>
                <Logomarca src="https://www.viarnet.com.br/wp-content/uploads/2021/09/logo_horizontal_viarnet_branco.png" />
                <LogoDescription></LogoDescription>
            </LogoContainer>
            
            <InputsContainer>
                <FormTitle>Login</FormTitle>

                <Input
                    type="text"
                    value={email}
                    onChange={handleEmailInput}
                    placeholder="Digite seu e-mail"
                />
                <Input
                    type="password"
                    value={password}
                    onChange={handlePasswordInput}
                    placeholder="Digite sua senha"
                />
                <Button onClick={handleLogin}>Conectar</Button>
                </InputsContainer>
            </FormContainer>

        </Container>
        </>
    );
}
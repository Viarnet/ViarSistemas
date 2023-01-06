import './App.css'
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { RegistrarOs } from './pages/RegistrarOs';
import { PrivateAdmin } from './pages/PrivateAdmin';
import { EncaminharOS } from './pages/EncaminharOS';
import { Cadastrar } from './pages/Cadastrar';
import { Listar } from './pages/Listar';
import { Atendimentos } from './pages/Atendimentos';
import { Gerencia } from './pages/Gerencia';
import { Compatibilidade } from './pages/Compatibilidade';
import { RegistrarRoteador } from './pages/RegistrarRoteador';
import FixoDisponiveis from './pages/FixoDisponiveis';
import PortabilidadesFixa from './pages/PortabilidadesFixa';
import PortabilidadesMovel from './pages/PortabilidadesMovel';

function App() {

  return (
    <Routes>
    <Route path='/login' element={ <Login /> }/>
    <Route path='/' element={ <Layout /> }>
      {/* ROTAS GERAIS */}
      <Route path='home' element={ <RequireAuth role={0}><Home /></RequireAuth> }/>
      
      {/* ROTAS PARA O COMERCIAL */}
      <Route path='compatibilidade' element={ <RequireAuth role={2}><Compatibilidade /></RequireAuth> }/>
      <Route path='numerosfixodisponiveis' element={ <RequireAuth role={2}><FixoDisponiveis /></RequireAuth> }/>
      <Route path='portabilidades-fixas' element={ <RequireAuth role={2}><PortabilidadesFixa /></RequireAuth> }/>
      <Route path='portabilidades-movel' element={ <RequireAuth role={2}><PortabilidadesMovel /></RequireAuth> }/>

      {/* ROTAS PARA O SUPORTE */}
      <Route path='atendimentos' element={ <RequireAuth role={3}><Atendimentos /></RequireAuth> }/>
      <Route path='registrar' element={ <RequireAuth role={3}><RegistrarOs /></RequireAuth> }/>
      <Route path='encaminhar' element={ <RequireAuth role={3}><EncaminharOS /></RequireAuth> }/>

      {/* ROTAS DE GERENCIA */}
      <Route path='gerencia' element={ <RequireAuth role={5}><Gerencia /></RequireAuth> }/>
      
      {/* ROTAS DE ADMISTRADOR */}
      <Route path='privadaadmin' element={ <RequireAuth role={6}><PrivateAdmin /></RequireAuth> }/>
      <Route path='cadastrar' element={ <RequireAuth role={6}><Cadastrar /></RequireAuth> }/>
      <Route path='listar' element={ <RequireAuth role={6}><Listar /></RequireAuth> }/>
      <Route path='registrarot' element={ <RequireAuth role={6}><RegistrarRoteador /></RequireAuth> }/>
    </Route>
  </Routes>
    
  )
}

export default App

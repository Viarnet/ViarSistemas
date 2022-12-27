
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

function App() {

  return (
    <Routes>
    <Route path='/login' element={ <Login /> }/>
    <Route path='/' element={ <Layout /> }>
      <Route path='home' element={ <RequireAuth role={0}><Home /></RequireAuth> }/>
      <Route path='registrar' element={ <RequireAuth role={3}><RegistrarOs /></RequireAuth> }/>
      <Route path='encaminhar' element={ <RequireAuth role={3}><EncaminharOS /></RequireAuth> }/>
      <Route path='privadaadmin' element={ <RequireAuth role={6}><PrivateAdmin /></RequireAuth> }/>
      <Route path='cadastrar' element={ <RequireAuth role={6}><Cadastrar /></RequireAuth> }/>
      <Route path='listar' element={ <RequireAuth role={6}><Listar /></RequireAuth> }/>
    </Route>
  </Routes>
    
  )
}

export default App

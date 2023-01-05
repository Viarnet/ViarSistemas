import { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './style.css'
import logo from '../../assets/logo.png';
import logoTexto from '../../assets/logo_texto.png';
import { AuthContext } from '../../contexts/Auth/AuthContext';
function SideMenu() {
  const [showMenu, setShowMenu] = useState(true)
  const [showSubMenu, setShowSubMenu] = useState(false)
  const [showSubMenu2, setShowSubMenu2] = useState(false)
  const [showSubMenu3, setShowSubMenu3] = useState(false)
  const [showSubMenu4, setShowSubMenu4] = useState(false)
  const [showSubMenu5, setShowSubMenu5] = useState(false)
  const auth = useContext(AuthContext);

  function handlesignout(){
    auth.signout();
  }

  return (
    <>
      <div className={`sidebar ${showMenu === false ? "" : "close"}`}>
    <div className="logo-details">
      <img src={logo} className="logo_icon"/>
      <img src={logoTexto} className="logo_name"/>
    </div>
    <ul className="nav-links">
    <li>
        <Link to='home'>
          <i className='bx bx-home' ></i>
          <span className="link_name">Pagina Inicial</span>
        </Link>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Pagina Inicial</a></li>
        </ul>
      </li>
      {auth.user.role == 0 || auth.user.role == 6 && (
      <li className={`${showSubMenu === true ? "showMenu" : ""}`}>
        <div className="iocn-link" onClick={()=>setShowSubMenu(!showSubMenu)}>
          <a href="#">
            <i className='bx bx-phone' ></i>
            <span className="link_name">Tel Fixa</span>
          </a>
          <i className='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Tel Fixa</a></li>
          <li><Link to='home'>Portabilidades</Link></li>
          <li><Link to='privadaadmin'>Numeros Disponiveis</Link></li>
        </ul>
      </li>)}
      {auth.user.role == 0 || auth.user.role == 6 && (
      <li className={`${showSubMenu2 === true ? "showMenu" : ""}`}>
        <div className="iocn-link"  onClick={()=>setShowSubMenu2(!showSubMenu2)}>
          <a href="#">
            <i className='bx bx-mobile' ></i>
            <span className="link_name">Tel Movel</span>
          </a>
          <i className='bx bxs-chevron-down arrow'></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Tel Movel</a></li>
          <li><Link to='privada'>Portabilidades</Link></li>
          <li><Link to='home'>Numeros Disponiveis</Link></li>
        </ul>
      </li>)}
      {auth.user.role == 2 || auth.user.role == 6 && (
      <li className={`${showSubMenu5 === true ? "showMenu" : ""}`}>
        <div className="iocn-link" onClick={()=>setShowSubMenu5(!showSubMenu5)}>
          <a href="#">
            <i className='bx bxs-wallet-alt' ></i>
            <span className="link_name">Suporte</span>
          </a>
          <i className='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Comercial</a></li>
          <li><Link to='compatibilidade'>Compatibilidade</Link></li>
        </ul>
      </li>)}
      {auth.user.role >= 3 && (
      <li className={`${showSubMenu3 === true ? "showMenu" : ""}`}>
        <div className="iocn-link" onClick={()=>setShowSubMenu3(!showSubMenu3)}>
          <a href="#">
            <i className='bx bx-spreadsheet' ></i>
            <span className="link_name">Suporte</span>
          </a>
          <i className='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Suporte</a></li>
          <li><Link to='gerencia'>Gerência</Link></li>
          <li><Link to='atendimentos'>Atendimentos</Link></li>
          <li><Link to='registrar'>Registrar O.S</Link></li>
          <li><Link to='encaminhar'>Encaminhar O.S</Link></li>
        </ul>
      </li>)}
      {auth.user.role == 6 && (
      <li className={`${showSubMenu4 === true ? "showMenu" : ""}`}>
        <div className="iocn-link" onClick={()=>setShowSubMenu4(!showSubMenu4)}>
          <a href="#">
            <i className='bx bx-user' ></i>
            <span className="link_name">Cadastros</span>
          </a>
          <i className='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Cadastros</a></li>
          <li><Link to='cadastrar'>Cadastrar</Link></li>
          <li><Link to='listar'>Listar</Link></li>
        </ul>
      </li>)}
      <li>
        <a href="#">
          <i className='bx bx-cog' ></i>
          <span className="link_name">Configurações</span>
        </a>
        <ul className="sub-menu blank">
          <li><a className="link_name" href="#">Configurações</a></li>
        </ul>
      </li>
      <li>
    <div className="profile-details">
      <div className="profile-content">

      </div>
      <div className="name-job">
        <div className="profile_name">{`${auth.user.name.split(" ")[0]}`}</div>
        <div className="job">
          {auth.user.role == 6 && "Adminstrador"}
          {auth.user.role == 5 && "Supervisor"}
          {auth.user.role == 3 && "Suporte"}
          {auth.user.role == 0 && "Comercial"}
        </div>
      </div>
      <i className='bx bx-log-out' onClick={handlesignout}></i>
    </div>
  </li>
</ul>
  </div>
  <section className="home-section">
    <div className="home-content">
      <i className='bx bx-menu' onClick={()=>setShowMenu(!showMenu)}></i>
    </div>
    <Outlet />
  </section>
    </>
  )
}

export default SideMenu

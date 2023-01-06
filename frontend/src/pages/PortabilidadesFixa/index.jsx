
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { MiniLoading } from "../../components/MiniLoading";
import PortabilidadesStatus from "../../components/PortabilidadesStatus";
import './styles.css'
export default function PortabilidadesFixa() {
   const [portabilidades, setPortabilidades] = React.useState([]);
   const [loading , setLoading] = React.useState(false)
   useEffect(()=>{
    setLoading(true)
    axios.get(`http://192.168.0.95:3333/telefonia-fixa/portabilidades-fixa`).then(({data})=>{
      setPortabilidades(data)
      setLoading(false)
    });
  }, []);
      

  return (
      <div className="port-body">
      <h2 style={{marginBottom: 25}}>Portabilidades de Fixos</h2>
        {loading && <MiniLoading />}
        <div className="numeros-body">
        {!loading && <PortabilidadesStatus data={portabilidades}/>} 
        </div>
      </div>  
  )
}


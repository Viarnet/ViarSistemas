import axios from "axios";
import "./styles.css";
import React from 'react';
import { SelectComponent } from '../../components/SelectComponent';
import NumberCard from "../../components/NumberCard";
import { MiniLoading } from "../../components/MiniLoading";
import { toast, ToastContainer } from "react-toastify";




export default function FixoDisponiveis() {

  const [cidade, setCidade] = React.useState('Escolha uma Cidade!');
  const [atual_cidade, setAtualCidade] = React.useState([]);
  const [loading, setLoading] = React.useState(false)



  async function getCidade(cidade) {
    if (cidade != "Escolha uma Cidade!") {
      setLoading(true)
      await axios.get(`http://192.168.0.95:3333/telefonia-fixa/disponiveis/${cidade}`).then((city) => {
        setAtualCidade(city.data.numeros_disponiveis)
        setLoading(false)
      });
    }

  }

  async function handleReserva({linha, cidade, reservado, user}){
    setLoading(true)
    await axios.get(`http://192.168.0.95:3333/telefonia-fixa/reservar/${cidade}/${linha}/${reservado}/${user}`)
    .then(({data})=>{
      toast.success(`${data}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      getCidade(cidade)
    })
  }

  
  const handleChange = (event) => {
    getCidade(event.target.value)
    setCidade(event.target.value);
  };



  return (
    <div className='disponiveis-body'>
      <h3>Fixos Disponiveis</h3>
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
      <SelectComponent
        value={cidade}
        handleOnChange={handleChange}
      >
        <option value={"Escolha uma Cidade!"}>Escolha uma Cidade!</option>
        <option value={"MEDIANEIRA"}>MEDIANEIRA</option>
        <option value={"MATELANDIA"}>MATELANDIA</option>
        <option value={"CEU AZUL"}>CEU AZUL</option>
        <option value={"SAO MIGUEL"}>SAO MIGUEL</option>

      </SelectComponent>

      <div className="numeros-body">
        {loading && <MiniLoading />}
        {!loading && cidade != "Escolha uma Cidade!" ? <NumberCard data={atual_cidade} cidade={cidade} handleReservar={handleReserva} /> : ""}
      </div>
    </div >
  )
}

import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
//rotas
import { Routes, Route, useParams } from "react-router-dom";
import { requestHospedagemSetarLocatario } from "../../actions/hospedagem";


import Nav from '../../components/nav/Nav'
import { buscarLocador } from "../../utils/firebase-api";

import './Hospedagem.scss'


function Hospedagem({ hospedagens, islogin, emailLocatario}) {

    const props = useParams()
    const dispatch = useDispatch();
    const [hospedagem, setHospedagem] = useState([])
    const [locador, setLocador] = useState({})


    const buscaHospedagem = () => {
        hospedagens.map((data) => {
            if (data[0] == props.codigoHospedagem) setHospedagem(data)
        })
    }

    const meCandidatar = () => {
        if (islogin) return dispatch(requestHospedagemSetarLocatario(props.codigoHospedagem ,emailLocatario))
        alert("Voce precisa estar logado")
    }

    useEffect(() => {
        buscaHospedagem();
         setLocador(buscarLocador(hospedagem[1]?.locador))
    }, [hospedagem])

    return (
        <div className='hospedagem-body'>
            <Nav />

            <div className='hospedagem-body-info'>

                <div className='hospedagem-foto' >
                    <img src={hospedagem[1]?.fotoUrl} className='hospedagem-foto-foto' />
                </div>

                <div>
                    <h1>{hospedagem[1]?.descricao}</h1>
                    {hospedagem[1]?.disponivel ? <button onClick={meCandidatar}>Me candidatar</button> : null}
                </div>


            </div>

            <div className='hospedagem-body-info-locador'>
<div>{console.log(locador?.nome)}---</div>
            </div>



        </div>
    )
}

const mapStateToProps = state => ({
    hospedagens: state.hospedagem,
    islogin: state.usuario.islogin,
    emailLocatario: state.usuario.email,

});

export default connect(mapStateToProps)(Hospedagem);
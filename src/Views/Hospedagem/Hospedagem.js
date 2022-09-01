import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
//rotas
import { Routes, Route, useParams } from "react-router-dom";
import { requestHospedagemSetarLocatario } from "../../actions/hospedagem";


import Nav from '../../components/nav/Nav'

import './Hospedagem.scss'


function Hospedagem({ hospedagens, islogin, emailLocatario, usuarios }) {

    const props = useParams()
    const dispatch = useDispatch();
    const [hospedagem, setHospedagem] = useState([])
    const [locador, setLocador] = useState([])


    const buscaHospedagem = () => {
        console.log(hospedagens)

        hospedagens.map((data) => {
            if (data[0] == props.codigoHospedagem) setHospedagem(data)
        })
    }

    const buscaLocador = () => {
        console.log(usuarios)
        usuarios.map((data) => {
            if (data[1].locador == hospedagem[1]?.locador) setLocador(data)
        })
    }

    const meCandidatar = () => {
        if (islogin) return dispatch(requestHospedagemSetarLocatario(props.codigoHospedagem, emailLocatario))
        alert("Voce precisa estar logado")
    }

    useEffect(() => {
        buscaHospedagem();
        buscaLocador();
    }, [hospedagem])

    return (
        <div className='hospedagem-body'>
            <Nav />

            <div className='hospedagem-body-info'>

                <div className='hospedagem-foto' >
                    <img src={hospedagem[1]?.fotoUrl} className='hospedagem-foto-foto' />
                </div>

                <div className='hospedagem-descricao'>
                    <h1>{hospedagem[1]?.descricao}</h1>
                    {hospedagem[1]?.disponivel ? <button onClick={meCandidatar}>Me candidatar</button> : null}
                </div>


            </div>

            <div className='hospedagem-body-info-locador'>
                <h2>Informações do Locador</h2>
                <div>Nome: {locador[1]?.nome}</div>
                <div>Idioma: {locador[1]?.idioma}</div>
                <div>Aniversario: {locador[1]?.aniversario}</div>
                <div>Descrição: {locador[1]?.descricao}</div>



            </div>



        </div>
    )
}

const mapStateToProps = state => ({
    hospedagens: state.hospedagens,
    islogin: state.usuario.islogin,
    emailLocatario: state.usuario.email,
    usuarios: state.usuarios

});

export default connect(mapStateToProps)(Hospedagem);
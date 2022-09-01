import React, { useState } from 'react';

//MUI Comp
import './Dashboard.scss'

//Rotas
import { Link, Navigate } from "react-router-dom";


//Redux
import { connect } from 'react-redux';

//Actions


import Nav from '../../components/nav/Nav'

import EditarUsuario from '../../components/editarUsuario/EditarUsuario';
import CadastrarHospedagem from '../../components/cadastrarHospedagem/cadastrarHospedagem';
import CardDashHosp from '../../components/cardDashHosp/CardDashHosp';
import EditarHospedagem from '../../components/editarHospedagem/EditarHospedagem';

function Dashboard({islogin, hospedagens, hospedagem}) {
    const [opcao, setOpcao] = useState(1)

    return (
        <div className="dashboard-body">
            <Nav />

            <div className='dashboard-body-conteudos'>

            <div className='dashboard-opcoes-primaria'>

            <button className={opcao == 1 ? 'dashboard-bnt-selecionado' : 'dashboard-bnt'} onClick={() => setOpcao(1)}>Editar Perfil</button>
            <button className={opcao == 2 ? 'dashboard-bnt-selecionado' : 'dashboard-bnt'} onClick={() => setOpcao(2)}>Cadastrar Hospedagem</button>
            <button className={opcao == 3 ? 'dashboard-bnt-selecionado' : 'dashboard-bnt'} onClick={() => setOpcao(3)}>Editar Minhas Hospedagens</button>

            </div>


            
            <div className='dashboard-opcoes-secundaria'>

            
            {opcao == 1 && <EditarUsuario />}
            {opcao == 2 && <CadastrarHospedagem/>}
            {opcao == 3 && hospedagem.cidade == undefined && hospedagens.map((data) => {
                return <CardDashHosp hospedagem={data}/>
            })}

            {hospedagem.cidade == undefined ? null : <EditarHospedagem/>}
            {islogin ? null : <Navigate to='/home'/>}
            </div>
            </div>
        </div>
    )
}



function mapStateToProps(state) {
    return {
        islogin: state.usuario.islogin,
        nomeG: state.usuario.nome,
        emailG: state.usuario.email,
        senhaG: state.usuario.senha,
        idiomaG: state.usuario.idioma,
        aniversarioG: state.usuario.aniversario,
        descricaoG: state.usuario.descricao,
        hospedagens: state.hospedagens,
        hospedagem: state.hospedagem

    }
}

export default connect(mapStateToProps)(Dashboard);
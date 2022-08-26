import React, { useState } from 'react';

//MUI Comp

//Rotas
import { Link, Navigate } from "react-router-dom";


//Redux
import { connect } from 'react-redux';

//Actions


import Nav from '../../components/nav/Nav'

import EditarUsuario from '../../components/editarUsuario/EditarUsuario';
import CadastrarHospedagem from '../../components/cadastrarHospedagem/cadastrarHospedagem';

function Dashboard({islogin}) {
    const [opcao, setOpcao] = useState(1)
    

    return (
        <div className="dashboard">
            <Nav />
            <button onClick={() => setOpcao(1)}>Editar</button>
            <button onClick={() => setOpcao(2)}>Cadastrar Hospedagem</button>

            {opcao == 1 && <EditarUsuario/>}
            {opcao == 2 && <CadastrarHospedagem/>}
            {islogin ? null : <Navigate to='/home'/>}


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

    }
}

export default connect(mapStateToProps)(Dashboard);
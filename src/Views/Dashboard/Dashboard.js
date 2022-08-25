import React, { useState } from 'react';

//MUI Comp

import Box from '@mui/material/Box';

//Rotas
import { Link } from "react-router-dom";

//Redux
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

//Actions
import { requestUsuarioEditar } from '../../actions/usuario';


import Nav from '../../components/nav/Nav'

import TextField from '@mui/material/TextField';

function Dashboard({ nomeG, emailG, senhaG, idiomaG, aniversarioG, descricaoG }) {

    const dispatch = useDispatch()
    const [nomeL, setNomeL] = useState(nomeG);
    const [senhaL, setSenhaL] = useState(senhaG);
    const [idiomaL, setIdiomaL] = useState(idiomaG);
    const [aniversarioL, setAniversarioL] = useState(aniversarioG);
    const [descricaoL, setDescricaoL] = useState(descricaoG);


    return (
        <div className="dashboard">
            <Nav />

            <TextField id="outlined-basic" label="Nome" variant="outlined"
                className="input" onChange={(data) => setNomeL(data.target.value)} value={nomeL} />

            <TextField id="outlined-basic" label="E-mail" variant="outlined"
                className="input" value={emailG} disabled={true} />

            <TextField id="outlined-basic" label="Senha" variant="outlined"
                className="input" onChange={(data) => setSenhaL(data.target.value)} value={senhaL}
            />

            <TextField id="outlined-basic" label="Idioma" variant="outlined"
                className="input" onChange={(data) => setIdiomaL(data.target.value)} value={idiomaL} />

            <TextField id="outlined-basic" label="Aniversario" variant="outlined"
                className="input" onChange={(data) => setAniversarioL(data.target.value)} value={aniversarioL} />

            <TextField id="outlined-basic" label="Descricao" variant="outlined"
                className="input" onChange={(data) => setDescricaoL(data.target.value)} value={descricaoL} />

            <button className="bnt-entrar-form" onClick={(() => dispatch(requestUsuarioEditar(nomeL, emailG, senhaL, idiomaL, aniversarioL, descricaoL)))}>Alterar</button>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        nomeG: state.usuario.nome,
        emailG: state.usuario.email,
        senhaG: state.usuario.senha,
        idiomaG: state.usuario.idioma,
        aniversarioG: state.usuario.aniversario,
        descricaoG: state.usuario.descricao,

    }
}

export default connect(mapStateToProps)(Dashboard);
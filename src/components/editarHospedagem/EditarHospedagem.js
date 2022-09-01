import React, { useState } from 'react';

//MUI Comp

import Box from '@mui/material/Box';

//Rotas
import { Link, Navigate } from "react-router-dom";

//Redux
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

//Actions
import { requestUsuarioEditar, requestUsuarioExcluir } from '../../actions/usuario';


import './EditarHospedagem.scss'
import TextField from '@mui/material/TextField';
import { requestHospedagemEditar, requestHospedagemExcluir, requestHospedagemZerar } from '../../actions/hospedagem';
import { requestHospedagensListar } from '../../actions/hospedagens';

function EditarHospedagem({hospedagem}) {

    const hospedagemL = {
        codigoHospedagem: hospedagem.codigoHospedagem,
        cidade: hospedagem.cidade,
        pais: hospedagem.pais,
        descricao: hospedagem.descricao
    }

    const editar = () => {
        try {
            dispatch(requestHospedagemEditar(hospedagemL.codigoHospedagem, cidade, pais, descricao))
            dispatch(requestHospedagemZerar())
            dispatch(requestHospedagensListar())
        } catch (error) {
            
        }
    }

    const excluir = () => {
        try {
            dispatch(requestHospedagemExcluir(hospedagemL.codigoHospedagem))
            dispatch(requestHospedagemZerar())
            dispatch(requestHospedagensListar())
        } catch (error) {
            
        }
    }

    const dispatch = useDispatch()
    const [cidade, setCidade] = useState(hospedagemL.cidade);
    const [pais, setPais] = useState(hospedagemL.pais);
    const [descricao, setDescricao] = useState(hospedagemL.descricao);


    return (
        <div className="editar-usuario">
            <TextField id="outlined-basic" label="Cidade" variant="outlined"
                className="input" onChange={(data) => setCidade(data.target.value)} value={cidade} />

            {console.log(hospedagemL)}
            <TextField id="outlined-basic" label="País" variant="outlined"
                className="input" onChange={(data) => setPais(data.target.value)} value={pais}
            />

            <TextField id="outlined-basic" label="descricao" variant="outlined"
                className="input" onChange={(data) => setDescricao(data.target.value)} value={descricao} />

            

            <button className="bnt-entrar-form" onClick={editar}>Alterar Dados</button>
            <button className="bnt-excluir-hospedagem" onClick={excluir}>Excluir Hospedagem</button>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        hospedagem: state.hospedagem

    }
}

export default connect(mapStateToProps)(EditarHospedagem);
import React, { useState } from 'react';

//MUI Comp

import Box from '@mui/material/Box';

//Rotas
import { Link } from "react-router-dom";

//Redux
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

//Actions
import { requestHospedagemAdicionarFoto, requestHospedagemCadastrar } from '../../actions/hospedagem';



import TextField from '@mui/material/TextField';

function CadastrarHospedagem({idusuario}) {

    const dispatch = useDispatch();
    const [cidadeL, setCidadeL] = useState('');
    const [paisL, setPaisL] = useState('');
    const [descricaoL, setDescricaoL] = useState('');

    const [foto, setFoto] = useState(null);

    return (
        <div className="editar-usuario">
            <TextField id="outlined-basic" label="Cidade" variant="outlined"
                className="input" onChange={(data) => setCidadeL(data.target.value)}/>

            <TextField id="outlined-basic" label="País" variant="outlined"
                className="input" onChange={(data) => setPaisL(data.target.value)}/>

            <TextField id="outlined-basic" label="Descrição" variant="outlined"
                className="input" onChange={(data) => setDescricaoL(data.target.value)}/>
            <input className="bnt-adicionar-fotos" type='file' onChange={(e) => setFoto(e.target.files[0])}/>
            <Link to='/home'>Home</Link>
            <button className='bnt-cadastrar-hospedagem' onClick={() => dispatch(requestHospedagemCadastrar(idusuario, 'locatario', cidadeL, paisL, descricaoL, foto))}>Oferecer Hospedagem</button>
        </div>
    )
}



function mapStateToProps(state) {
    return {
        //PK USUARIO
        idusuario: state.usuario.email

    }
}

export default connect(mapStateToProps)(CadastrarHospedagem);
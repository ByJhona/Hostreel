import React, { useState } from 'react';

//MUI Comp
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import TextField from '@mui/material/TextField';

// scss
import './CadastrarHospedagem.scss'

//Redux
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';

//Actions
import { requestHospedagemCadastrar } from '../../actions/hospedagem';

function CadastrarHospedagem({ idusuario }) {

    const dispatch = useDispatch();
    const [cidadeL, setCidadeL] = useState('');
    const [paisL, setPaisL] = useState('');
    const [descricaoL, setDescricaoL] = useState('');

    const [foto, setFoto] = useState(null);

    return (
        <div className='cadastrar-hospedagem-body'>
            <TextField id="outlined-basic" label="Descrição" variant="outlined"
                className="input long-input" onChange={(data) => setDescricaoL(data.target.value)} />
            <TextField id="outlined-basic" label="Cidade" variant="outlined"
                className="input short-input" onChange={(data) => setCidadeL(data.target.value)} />

            <TextField id="outlined-basic" label="País" variant="outlined"
                className="input short-input" onChange={(data) => setPaisL(data.target.value)} />
            {console.log(cidadeL)}

            <label for="file-input">
                <h3>Adicionar foto</h3>
                <AddPhotoAlternateIcon className='icon-add-foto' />
            </label>
            <input id="file-input" type='file' onChange={(e) => setFoto(e.target.files[0])} />

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
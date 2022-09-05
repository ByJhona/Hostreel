import "./Cadastro.scss"
import { useState } from "react";

import { Navigate } from "react-router-dom";



//Material UI
import TextField from '@mui/material/TextField';

import { requestUsuarioCadastar } from '../../actions/usuario'

// Redux
import { useDispatch, connect } from "react-redux";
function Cadastro({ isloginG }) {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className="body-cadastro">

            <div className="background-cadastro">

            </div>

            <div className="nav-cadastro"><h1>/\Hostreel</h1></div>
            <div className="form-cadastro">
                <p >Você está a poucos passos de aproveitar todos os nossos benefícios.</p>
                <TextField id="outlined-basic" label="Nome" variant="outlined"
                    className="input" onChange={(data) => setName(data.target.value)} />

                <TextField id="outlined-basic" label="E-mail" variant="outlined"
                    className="input" onChange={(data) => setEmail(data.target.value)} />

                <TextField id="outlined-basic" label="Senha" variant="outlined"
                    className="input" onChange={(data) => setPassword(data.target.value)} />
                <button className="bnt-entrar-form" onClick={() => dispatch(requestUsuarioCadastar(name, email, password))}>Cadastrar</button>

                <button className="bnt-cancelar-form" onClick={<Navigate to='/' />}>Cancelar</button>

                {isloginG ? <Navigate from='/cadastro' to="/dashboard" /> : null}


            </div>
        </div>

    );
}

const mapStateToProps = state => ({
    isloginG: state.usuario.islogin,
    emailG: state.email,
    senhaG: state.senha
});

export default connect(mapStateToProps, null)(Cadastro);
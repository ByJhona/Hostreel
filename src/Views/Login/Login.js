import "./Login.scss"

//Material UI
import TextField from '@mui/material/TextField';

import { useState } from "react";
// Redux
import { connect } from 'react-redux';
import { requestEntrar, requestSair } from '../../actions/login';
import * as TodoActions from '../../actions/login';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from "react-redux";

//Rotas
import { Link } from "react-router-dom";
import { Redirect, Route, Switch, Navigate } from "react-router-dom";

//Componenetes
import Nav from '../../components/nav/Nav'
import { requestUsuarioConectar } from "../../actions/usuario";


export function Login({ islogin }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const dispatch = useDispatch();
    return (

        <div className="body-login">

            <div className="background-login">

            </div>
            <div className="nav-login"><h1>/\Hostreel</h1></div>
            <div className="form-login">
                <p >       Olá! Para continuar você precisa colocar seu e-mail e senha.</p>
                <TextField id="outlined-basic" label="E-mail" variant="outlined"
                    className="input" onChange={(data) => setEmail(data.target.value)} />
                <TextField id="outlined-basic" label="Senha" variant="outlined"
                    className="input" onChange={(data) => setSenha(data.target.value)}
                />


                <button className="bnt-entrar-form" onClick={() => dispatch(requestUsuarioConectar(email, senha))}>Entrar</button>

                <Link to='/cadastro'>
                    <button className="bnt-criar-conta-form" onClick={() => dispatch(requestSair())}>Criar Conta</button>
                </Link>

                {islogin ? <Navigate from='/login' to="/dashboard" /> : null}


            </div>
        </div>

    );
}

const mapStateToProps = state => ({
    islogin: state.usuario.islogin,
    email: state.email,
    password: state.password
});

//const mapDispatchToProps = (dispatch) => ({
//    logar: (email) => dispatch(requestEntrar(email, '1234')),
//    sair: () => dispatch(requestSair()),
//});

export default connect(mapStateToProps, null)(Login);
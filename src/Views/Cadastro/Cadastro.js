import "./Cadastro.scss"
import { useState } from "react";

//Material UI
import TextField from '@mui/material/TextField';

import {requestCadastro} from '../../actions/cadastro'

// Redux
import { useDispatch } from "react-redux";
export default function Cadastro(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div className="body-cadastro">
            
            <div className="background-cadastro">
            
            </div>
            <div className="nav-cadastro"><h1>/\Hostreel</h1></div>
            <div className="form-cadastro">
                <p >Você está a poucos passos de aproveitar todos os nossos beneficios.</p>
                <TextField id="outlined-basic" label="Nome" variant="outlined" 
                    className="input" onChange={(data) => setName(data.target.value)}/>

                <TextField id="outlined-basic" label="E-mail" variant="outlined" 
                    className="input" onChange={(data) => setEmail(data.target.value)}/>

                <TextField id="outlined-basic" label="Senha" variant="outlined" 
                    className="input" onChange={(data) => setPassword(data.target.value)}/>
                <button className="bnt-entrar-form" onClick={() => dispatch(requestCadastro(name, email, password))}>Cadastrar</button>
                <button className="bnt-cancelar-form">Cancelar</button>
                {console.log(name)}


            </div>
        </div>
        
    );
}

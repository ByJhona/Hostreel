import "./Login.scss"

//Material UI
import TextField from '@mui/material/TextField';



export default function Login(){
    return(
        <div className="body-login">
            
            <div className="background-login">
            
            </div>
            <div className="nav-login"><h1>/\Hostreel</h1></div>
            <div className="form-login">
                <p >       Olá! Para continuar você precisa colocar seu e-mail e senha.</p>
                <TextField id="outlined-basic" label="E-mail" variant="outlined" className="input-login"/>
                <TextField id="outlined-basic" label="Senha" variant="outlined" className="input-login"/>
                <button className="bnt-entrar-form">Entrar</button>
                <button className="bnt-criar-conta-form">Criar Conta</button>



            </div>
        </div>
        
    );
}
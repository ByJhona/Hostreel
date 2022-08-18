import "./Login.scss"

//Material UI
import TextField from '@mui/material/TextField';

// Redux
import {connect} from 'react-redux';
import {logarLogin, sairLogin} from '../../actions/login';

export function Login({logar, sair}){
    return(
        <div className="body-login">
            
            <div className="background-login">
            
            </div>
            <div className="nav-login"><h1>/\Hostreel</h1></div>
            <div className="form-login">
                <p >       Olá! Para continuar você precisa colocar seu e-mail e senha.</p>
                <TextField id="outlined-basic" label="E-mail" variant="outlined" className="input-login"/>
                <TextField id="outlined-basic" label="Senha" variant="outlined" className="input-login"/>
                <button className="bnt-entrar-form" onClick={logar}>Entrar</button>
                <button className="bnt-criar-conta-form" onClick={sair}>Criar Conta</button>



            </div>
        </div>
        
    );
}

const mapStateToProps = state => ({
    //login: state.loginReducer.login,
});

const mapDispatchToProps = (dispatch) => ({
    logar: () => dispatch(logarLogin()),
    sair: () => dispatch(sairLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
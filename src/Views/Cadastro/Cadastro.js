import "./Cadastro.scss"

//Material UI
import TextField from '@mui/material/TextField';

// Redux
import {connect} from 'react-redux'
import {cadastrarCadastro} from '../../actions/cadastro';


export function Cadastro({cadastrar}){
    return(
        <div className="body-cadastro">
            
            <div className="background-cadastro">
            
            </div>
            <div className="nav-cadastro"><h1>/\Hostreel</h1></div>
            <div className="form-cadastro">
                <p >Você está a poucos passos de aproveitar todos os nossos beneficios.</p>
                <TextField id="outlined-basic" label="Nome" variant="outlined" className="input-cadastro"/>
                <TextField id="outlined-basic" label="E-mail" variant="outlined" className="input-cadastro"/>
                <TextField id="outlined-basic" label="Senha" variant="outlined" className="input-cadastro"/>
                <button className="bnt-entrar-form" onClick={cadastrar}>Cadastrar</button>
                <button className="bnt-cancelar-form">Cancelar</button>



            </div>
        </div>
        
    );
}

const mapStateToProps = (state) => ({
    logado: state.cadastroReducer.logado,
});

const mapDispatchToProps = (dispatch) => ({
    logar: () => dispatch(cadastrarCadastro()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
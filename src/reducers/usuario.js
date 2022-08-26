const initialState = {
    islogin: false,
    nome: '',
    email: '',
    senha: '',
    idioma: '',
    aniversario: '',
    descricao: '',
}

export default function usuarioReducer(state = initialState, action) {
    switch (action.type) {

        //Acao que carrega as informacoes do banco
        case 'USUARIO::CONECTAR':
            return {
                islogin: action.payload.islogin, nome: action.payload.nome, email: action.payload.email,
                senha: action.payload.senha, idioma: action.payload.idioma, aniversario: action.payload.aniversario,
                descricao: action.payload.descricao
            }

        case 'USUARIO::DESCONECTAR':
            return {
                islogin: false, nome: '', email: '',
                senha: '', idioma: '', aniversario: '',
                descricao: ''
            }
        case 'USUARIO::CADASTRAR':
            return {
                islogin: action.payload.islogin, nome: action.payload.nome, email: action.payload.email,
                senha: action.payload.senha, idioma: state.idioma, aniversario: state.aniversario,
                descricao: state.descricao
            }
        case 'USUARIO::EDITAR':
            return {
                islogin: state.islogin, nome: action.payload.nome, email: action.payload.email,
                senha: action.payload.senha, idioma: action.payload.idioma, aniversario: action.payload.aniversario,
                descricao: action.payload.descricao
            }
        case 'USUARIO::EXCLUIR':
            return {
                islogin: action.payload.islogin, nome: action.payload.nome, email: action.payload.email,
                senha: action.payload.senha, idioma: action.payload.idioma, aniversario: action.payload.aniversario,
                descricao: action.payload.descricao
            }

        default:
            return {
                islogin: state.islogin, nome: state.nome, email: state.email,
                senha: state.senha, idioma: state.idioma, aniversario: state.aniversario,
                descricao: state.descricao
            }
    }
};


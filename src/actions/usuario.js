export function requestUsuarioConectar(email, senha){
    return{
        type: "REQUEST::USUARIO::CONECTAR",
        payload: {
            email,
            senha,
        }
    }
};

export function requestUsuarioDesconectar(email, password){
    return{
        type: "REQUEST::USUARIO::DESCONECTAR",
    }
};

export function requestUsuarioCadastar(nome, email, senha){
    return{
        type: 'REQUEST::USUARIO::CADASTRAR',
        payload:{
            nome,
            email,
            senha,
        }
    }
}

export function requestUsuarioEditar(nome, email, senha, idioma, aniversario, descricao){
    return{
        type: 'REQUEST::USUARIO::EDITAR',
        payload:{
            nome,
            email,
            senha,
            idioma,
            aniversario,
            descricao
        }
    }
}
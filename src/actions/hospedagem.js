export function requestHospedagemCadastrar(idusuario, cidade, pais, descricao) {
    return {
        type: 'REQUEST::HOSPEDAGEM::CADASTRAR',
        payload: {
            idusuario,
            cidade,
            pais,
            descricao
        }
    }
}

export function requestHospedagemListar() {
    return {
        type: 'REQUEST::HOSPEDAGEM::LISTAR'
    }
}

export function requestHospedagemAdicionarFoto(imagem) {
    return {
        type: 'REQUEST::HOSPEDAGEM::ADICIONAR::FOTO',
        payload:{
            imagem
        }
    }
}
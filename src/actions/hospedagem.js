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
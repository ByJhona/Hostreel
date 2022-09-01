export function requestHospedagemCadastrar(locador, locatario, cidade, pais, descricao, foto) {
    return {
        type: 'REQUEST::HOSPEDAGEM::CADASTRAR',
        payload: {
            locador,
            locatario,
            cidade,
            pais,
            descricao,
            foto
        }
    }
}

export function requestHospedagemEditar(codigoHospedagem, cidade, pais, descricao) {
    return {
        type: 'REQUEST::HOSPEDAGEM::EDITAR',
        payload: {
            codigoHospedagem,
            cidade,
            pais,
            descricao
        }
    }
}

export function requestHospedagemSetar(codigoHospedagem, cidade, pais, descricao) {
    return {
        type: 'REQUEST::HOSPEDAGEM::SETAR',
        payload: {
            codigoHospedagem,
            cidade,
            pais,
            descricao
            
        }
    }
}

export function requestHospedagemSetarLocatario(codigoHospedagem, locatario) {
    return {
        type: 'REQUEST::HOSPEDAGEM::SETAR::LOCATARIO',
        payload: {
            codigoHospedagem,
            locatario,
            
        }
    }
}

export function requestHospedagemZerar() {
    return {
        type: 'REQUEST::HOSPEDAGEM::ZERAR',
    }
}


export function requestHospedagemExcluir(codigoHospedagem){
    return{
        type: 'REQUEST::HOSPEDAGEM::EXCLUIR',
        payload:{
            codigoHospedagem
        }
    }
}
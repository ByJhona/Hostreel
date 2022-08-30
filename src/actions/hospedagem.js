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

export function requestHospedagemCarregarFoto(codigoFoto) {
    return {
        type: 'REQUEST::HOSPEDAGEM::CARREGAR::FOTO',
        payload:{
            codigoFoto
        }
    }
}

export function requestHospedagemEditar(codigoHospedagem, locatario, cidade, pais, descricao) {
    return {
        type: 'REQUEST::HOSPEDAGEM::EDITAR',
        payload: {
            codigoHospedagem,
            locatario,
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



const initialState = {}

export default function hospedagemReducer(state = initialState, action) {
    switch (action.type) {


        case 'HOSPEDAGEM::CADASTRAR':
            return {
                locador: action.payload.locador, locatario: action.payload.locatario, cidade: action.payload.cidade, pais: action.payload.pais,
                descricao: action.payload.descricao, foto: action.payload.foto
            }

        case 'HOSPEDAGEM::SETAR':
            //Coloca todos os dados de uma vez no state
            console.log(action.payload)
            return {
                codigoHospedagem: action.payload.codigoHospedagem, cidade: action.payload.cidade, pais: action.payload.pais,
                descricao: action.payload.descricao
            }
        case 'HOSPEDAGEM::ZERAR':
            //Coloca todos os dados de uma vez no state
            console.log(state)
            return {}

        default:
            return state
    }
};


const initialState = []

export default function hospedagemReducer(state = initialState, action) {
    switch (action.type) {


        case 'HOSPEDAGEM::CADASTRAR':
            return [...state, {
                idusuario: action.payload.idusuario, cidade: action.payload.cidade, pais: action.payload.pais,
                descricao: action.payload.descricao
            }]
        case 'HOSPEDAGEM::LISTAR':
            //Coloca todos os dados de uma vez no state
            console.log(action.payload.host)
            return action.payload.host

        default:
            return [...state]
    }
};


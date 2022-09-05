const initialState = []

export default function hospedagensReducer(state = initialState, action) {
    switch (action.type) {

        case 'HOSPEDAGENS::LISTAR':
            //Coloca todos os dados de uma vez no state
            return action.payload.host

        default:
            return [...state]
    }
};


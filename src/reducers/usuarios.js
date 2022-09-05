const initialState = []

export default function usuariosReducer(state = initialState, action) {
    switch (action.type) {

        //Acao que carrega as informacoes do banco
        case 'USUARIOS::LISTAR':
            return action.payload.users

        

        default:
            return [...state]
    }
};


const initialState = {
    idusuario: '',
    cidade: '',
    pais: '',
    descricao: ''
}

export default function usuarioReducer(state = initialState, action) {
    switch (action.type) {

        
        case 'HOSPEDAGEM::CADASTRAR':
            return {
                idusuario: action.payload.idusuario, cidade: action.payload.cidade, pais: action.payload.pais, 
                descricao: action.payload.descricao
            }

        default:
            return {
                
            }
    }
};


//actions


const cadastroReducer = (state = 0, action) => {
    switch (action.type){
        case 'CADASTRO::CADASTRAR':
            return state = true
        case 'CADASTRO::EDITAR':
            return state = false
        default:
            return state = true
    }
}

export default cadastroReducer;
//Constante inicial
const initialState = {
    name: '',
    email: '',
    password: ''
}

//actions
const cadastroReducer = (state = initialState, action) => {
    switch (action.type){
        case 'CADASTRO::CADASTRAR':
            console.log("TEste1")
            return {name: action.payload.name, email: action.payload.email, password: action.payload.password}
        default:
            return {name: state.name, email: state.email, password: state.password}
    }
}

export default cadastroReducer;
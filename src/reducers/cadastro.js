import {EDITAR, CADASTRAR} from '../actions/cadastro'

//actions


const cadastroReducer = (state = 0, action) => {
    switch (action.type){
        case CADASTRAR:
            console.log("Cadastrado e entrou")
            return state = true
        case EDITAR:
            console.log("Editou e salvou")
            return state = false
        default:
            console.log(" <<< Default")
            return state = true
    }
}

export default cadastroReducer;
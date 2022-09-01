import {combineReducers} from 'redux'
import login from './login'
import cadastro from './cadastro'
import usuario from './usuario'
import hospedagem from './hospedagem'
import hospedagens from './hospedagens'

import usuarios from './usuarios'

export default combineReducers({
    login,
    cadastro,
    usuario,
    hospedagem,
    usuarios,
    hospedagens
})

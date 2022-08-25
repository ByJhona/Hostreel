import {combineReducers} from 'redux'
import login from './login'
import cadastro from './cadastro'
import usuario from './usuario'

export default combineReducers({
    login,
    cadastro,
    usuario
})

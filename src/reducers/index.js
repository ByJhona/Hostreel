import {combineReducers} from 'redux'
import login from './login'
import cadastro from './cadastro'

export default combineReducers({
    login,
    cadastro
})

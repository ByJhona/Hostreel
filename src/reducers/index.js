import {combineReducers} from 'redux'

import usuario from './usuario'
import hospedagem from './hospedagem'
import hospedagens from './hospedagens'

import usuarios from './usuarios'

export default combineReducers({

    usuario,
    hospedagem,
    usuarios,
    hospedagens
})

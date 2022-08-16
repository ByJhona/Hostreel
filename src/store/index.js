import {createStore, combineReducers} from 'redux'
import loginReducer from '../reducers/login'
import cadastroReducer from '../reducers/cadastro';

const reducers = combineReducers({loginReducer, cadastroReducer});

const store = createStore(reducers);

export default store;
import {createStore, combineReducers, applyMiddleware} from 'redux'
import rootSaga from '../saga/sagas'
import createSagaMiddleware from 'redux-saga';
import loginReducer from '../reducers/login'
import cadastroReducer from '../reducers/cadastro';
import reducers from './../reducers/index'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
console.log(" ")
sagaMiddleware.run(rootSaga);
export default store;
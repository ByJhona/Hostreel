import {createStore, combineReducers, applyMiddleware} from 'redux'
import rootSaga from '../saga/sagas'
import createSagaMiddleware from 'redux-saga';
import loginReducer from '../reducers/login'
import cadastroReducer from '../reducers/cadastro';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({loginReducer, cadastroReducer});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './../utils/firebase'


function* login(action){
    const auth = getAuth(app);

    const user = {
        email: action.payload.email,
        password: action.payload.password
    }
   
    signInWithEmailAndPassword(auth, user.email, user.password)
        .then(() => {
            put({type: 'LOGIN::ENTRAR', payload: {
                email: user.email,
                password: user.password
            }})
            console.log("Logado!!")
        })
        .catch((error) => {
            console.log("Algo deu errado!! Usuario Não encontrado")
        })
}

function* logout(action){
    yield put({type: 'LOGIN::SAIR'})
}


export default function* root(){
    
    yield takeLatest('REQUEST::LOGIN', login)
    yield takeLatest('REQUEST::LOGOUT', logout)


}
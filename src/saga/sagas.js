import {call, put, takeEvery} from 'redux-saga/effects'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { LOGAR, SAIR } from '../actions/login';

const user = {
    email: "jhonatan@gmail.com",
    password: "12345678"
}
function* login(){
    console.log("teste")

    const auth = getAuth();

    signInWithEmailAndPassword(auth, user.email, user.password)
        .then(() => {
            console.log("Logado")
        })
        .catch((error) => {
            console.log(error.code)
        })
}

export default function* root(){
    yield [
        takeEvery(LOGAR, login),
    ]
}
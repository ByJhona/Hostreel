import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, get, child} from "firebase/database";
import app from './../utils/firebase'

// >>>>>>>>>>>>>>>>>>>>> LOGIN
function* login(action){
    const auth = getAuth(app);

    const user = {
        email: action.payload.email,
        password: action.payload.password
    }

    const dbRef = ref(getDatabase(app));
    get(child(dbRef, `users/${user.email}`)).then((snapshot) => {
    if (snapshot.exists()) {
        
        put({type: 'LOGIN::ENTRAR', payload: {
            email: user.email,
            password: user.password
        }})
        console.log("Logado!!")
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
        console.error(error);
    });
   
    
}
function* logout(action){
    yield put({type: 'LOGIN::SAIR'})
}
// <<<<<<<<<<<<<<<<<<<< LOGIN

// >>>>>>>>>>>>>>>>>>>> CADASTRO::EDITAR
function* cadastrarUsuario(action){
    console.log(action)
    const db = getDatabase(app);
    const user = {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password
    }

    set(ref(db, `users/${user.email}`), {
        name: user.name,
        email: user.email,
        password: user.password
    })
    .then()
    .catch();
}
// <<<<<<<<<<<<<<<<<<<< CADASTRO::EDITAR

export default function* root(){
    
    yield takeLatest('REQUEST::LOGIN', login)
    yield takeLatest('REQUEST::LOGOUT', logout)
    yield takeLatest('REQUEST::CADASTRAR', cadastrarUsuario)


}
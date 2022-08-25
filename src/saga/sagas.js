import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set, get, child, update } from "firebase/database";
import app from './../utils/firebase'

//rotas

// >>>>>>>>>>>>>>>>>>>>> LOGIN
function* login(action) {
    const auth = yield getAuth(app);
    var islogin = false;
    var user = {
        email: action.payload.email,
        senha: action.payload.senha
    }

    const dbRef = yield ref(getDatabase(app));
    yield get(child(dbRef, `users/${user.email}`)).then((snapshot) => {
        if (snapshot.exists()) {
            user = snapshot.val();
            islogin = true;


        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

    //Colocar Flag
    if (islogin) {
        console.log(user)
        yield put({
            type: 'USUARIO::CONECTAR', payload: {
                islogin: true,
                nome: user.nome,
                email: user.email,
                senha: user.senha,
                idioma: user.idioma,
                aniversario: user.aniversario,
                descricao: user.descricao
            }
        })

    }
}
//Nao finalizadwa
function* logout(action) {
    yield put({ type: 'LOGIN::SAIR' })
}
// <<<<<<<<<<<<<<<<<<<< LOGIN

// >>>>>>>>>>>>>>>>>>>> CADASTRAR

function* cadastrarUsuario(action) {
    console.log(action)
    const db = getDatabase(app);
    const user = {
        nome: action.payload.nome,
        email: action.payload.email,
        senha: action.payload.senha,
        idioma: '',
        aniversario: '',
        descricao: ''
    }
    var islogin = false;
    //Erro na hora de criar PK - não pode conter ponto
    yield set(ref(db, `users/${user.email}`), {
        islogin: true,
        nome: user.nome,
        email: user.email,
        senha: user.senha,
        idioma: user.idioma,
        aniversario: user.aniversario,
        descricao: user.descricao
    })
        .then(() => {
            islogin = true;
        })
        .catch();

    // Nao verifica se ja tem no bd

    if (islogin) {
        yield put({
            type: 'USUARIO::CADASTRAR', payload: {
                islogin: true,
                nome: user.nome,
                email: user.email,
                senha: user.senha,
                idioma: user.idioma,
                aniversario: user.aniversario,
                descricao: user.descricao
            }
        })

    }


}
// <<<<<<<<<<<<<<<<<<<< CADASTRAR

function* editarUsuario(action) {
    alert("Entrou")
    const db = getDatabase(app);

    var islogin = false;

    const user = {
        islogin: true,
        nome: action.payload.nome,
        email: action.payload.email,
        senha: action.payload.senha,
        idioma: action.payload.idioma,
        aniversario: action.payload.aniversario,
        descricao: action.payload.descricao
    }

    yield update(ref(db, `users/${user.email}`), {
        islogin: user.islogin,
        nome: user.nome,
        email: user.email,
        senha: user.senha,
        idioma: user.idioma,
        aniversario: user.aniversario,
        descricao: user.descricao
    })
        .then(() => {
            islogin = true;
        })
        .catch();

    if (islogin) {
        console.log('entrou aqui')
        yield put({
            type: 'USUARIO::EDITAR',
            payload: {
                islogin: user.islogin,
                nome: user.nome,
                email: user.email,
                senha: user.senha,
                idioma: user.idioma,
                aniversario: user.aniversario,
                descricao: user.descricao
            }
        })
    }


}

export default function* root() {

    yield takeLatest('REQUEST::USUARIO::CONECTAR', login)
    yield takeLatest('REQUEST::LOGOUT', logout)
    yield takeLatest('REQUEST::USUARIO::CADASTRAR', cadastrarUsuario)
    yield takeLatest('REQUEST::USUARIO::EDITAR', editarUsuario)


}
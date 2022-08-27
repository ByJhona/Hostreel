import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getAuth, deleteUser } from "firebase/auth";
import { getDatabase, ref, set, get, child, update, remove, push, orderByKey, limitToLast } from "firebase/database";
import { getStorage, uploadBytes, uploadBytesResumable } from "firebase/storage";
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

// >>>>>>>>>>>>>>>>>>>> EDITAR
function* editarUsuario(action) {
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
// <<<<<<<<<<<<<<<<<<<< EDITAR
// >>>>>>>>>>>>>>>>>>>> EXCLUIR
function* excluirUsuario(action) {
    const db = getDatabase(app);

    const user = {
        email: action.payload.email,
    }

    yield remove(ref(db, `users/${user.email}`));

    yield put({
        type: 'USUARIO::EXCLUIR',
        payload: {
            islogin: false,
            nome: '',
            email: '',
            senha: '',
            idioma: '',
            aniversario: '',
            descricao: ''
        }
    })
}
// <<<<<<<<<<<<<<<<<<<< EXCLUIR

// >>>>>>>>>>>>>>>>>>>> CADASTRAR HOSPEDAGEM
function* cadastrarHospedagem(action) {
    const db = getDatabase(app);
    var host = {
        idusuario: action.payload.idusuario,
        cidade: action.payload.cidade,
        pais: action.payload.pais,
        descricao: action.payload.descricao
    }

    var islogin = false;
    yield push(ref(db, `hospedagens/`), {
        idusuario: host.idusuario,
        cidade: host.cidade,
        pais: host.pais,
        descricao: host.descricao
    }).then(() => {
        islogin = true;
    })
        .catch();
    //Erro na hora de criar PK - não pode conter ponto

    // Nao verifica se ja tem no bd

    if (islogin) {//Carrega novamente 
        yield listarHospedagens();

    }


}
// <<<<<<<<<<<<<<<<<<<< CADASTRAR HOSPEDAGEM

function* listarHospedagens() {
    //pega do banco de dados
    
    var isOk = false;
    const dbRef = yield ref(getDatabase(app), `hospedagens/`);
    var host = [];
    yield get(dbRef).then((snapshot) => {
        if (snapshot.exists()) {
            //transformar object em arrar

            host = snapshot.val();
            isOk = true;
            console.log(host)

            //
            var arr = Object.entries(host)
            host = arr;
            console.log(host)
            //



        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

    //Coloca o array como variavel global
    if (isOk) {
        yield put({
            type: 'HOSPEDAGEM::LISTAR', payload: {
                host
            }
        })
    }

}

// >>>>>>>>>>>>>>>>>>>> ADICIONAR FOTO
function* adicionarFotoHospedagem(action){
    const storage = getStorage(app);

    // curadoria
    action.payload.imagem.preventDefault();
    const file = action.payload.target[0]?.files[0]
    //

    yield uploadBytesResumable(ref(storage, 'imagem'), file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
}
//<<<<<<<<<<<<<<<<<<<<< ADICIONAR FOTO
export default function* root() {

    yield takeLatest('REQUEST::USUARIO::CONECTAR', login);
    yield takeLatest('REQUEST::LOGOUT', logout);
    yield takeLatest('REQUEST::USUARIO::CADASTRAR', cadastrarUsuario);
    yield takeLatest('REQUEST::USUARIO::EDITAR', editarUsuario);
    yield takeLatest('REQUEST::USUARIO::EXCLUIR', excluirUsuario);
    yield takeLatest('REQUEST::HOSPEDAGEM::CADASTRAR', cadastrarHospedagem);
    yield takeLatest('REQUEST::HOSPEDAGEM::LISTAR', listarHospedagens);
    yield takeLatest('REQUEST::HOSPEDAGEM::ADICIONAR::FOTO', adicionarFotoHospedagem);


}
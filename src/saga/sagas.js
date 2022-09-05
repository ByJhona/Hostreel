import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getAuth, deleteUser } from "firebase/auth";
import { getDatabase, ref, set, get, child, update, remove, push, orderByKey, limitToLast } from "firebase/database";
import { getStorage, uploadBytes, uploadBytesResumable, ref as sRef, getDownloadURL } from "firebase/storage";
import app from './../utils/firebase'
import uuid from 'react-uuid'

//rotas

// >>>>>>>>>>>>>>>>>>>>> LOGIN
function* login(action) {
    const auth = yield getAuth(app);
    var islogin = false;
    var user = {
        email: action.payload.email,
        senha: action.payload.senha
    }
    user.email = user.email.replace('.', ',')


    const dbRef = yield ref(getDatabase(app));
    yield get(child(dbRef, `users/${user.email}`)).then((snapshot) => {
        if (snapshot.exists()) {
            if (user.senha == snapshot.val().senha) {
                user = snapshot.val();
                islogin = true;
            }

        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

    //Colocar Flag
    if (islogin) {
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

// <<<<<<<<<<<<<<<<<<<< LOGIN

// >>>>>>>>>>>>>>>>>>>> CADASTRAR

function* cadastrarUsuario(action) {
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

    user.email = user.email.replace('.', ',')
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
        locador: action.payload.locador,
        locatario: action.payload.locatario,
        cidade: action.payload.cidade,
        pais: action.payload.pais,
        descricao: action.payload.descricao,
        foto: action.payload.foto
    }

    var islogin = false;
    var codigoHospedagem = uuid().slice(0, 8);
    var fotoUrl = null;


    const storage = yield getStorage(app)
    const fotoRef = yield sRef(storage, `hospedagens/${codigoHospedagem}/${host.foto.name}/`)
    yield uploadBytes(fotoRef, host.foto).then((data) => {
        alert("Foto carregada");

    })

    yield getDownloadURL(fotoRef).then((data) => {
        fotoUrl = data
        return data
    })



    yield set(ref(db, `hospedagens/${codigoHospedagem}`), {
        disponivel: true,
        locador: host.locador,
        locatario: host.locatario,
        cidade: host.cidade,
        pais: host.pais,
        descricao: host.descricao,
        fotoUrl: fotoUrl
    }).then(() => {
        islogin = true;
    })

    //Nao faz sentido essa funcao, tentar criar especifico 
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

            //
            var arr = Object.entries(host)
            host = arr;
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
            type: 'HOSPEDAGENS::LISTAR', payload: {
                host
            }
        })
    }

}

// >>>>>>>>>>>>>>>>>>>> ADICIONAR FOTO

//<<<<<<<<<<<<<<<<<<<<< ADICIONAR FOTO

// >>>>>>>>>>>>>>>>>>> EDITAR HOSPEDAGEM
function* editarHospedagem(action) {
    const db = getDatabase(app);
    alert("entou")

    var host = {
        codigoHospedagem: action.payload.codigoHospedagem,
        cidade: action.payload.cidade,
        pais: action.payload.pais,
        descricao: action.payload.descricao,
    }

    yield update(ref(db, `hospedagens/${host.codigoHospedagem}`), {
        cidade: host.cidade,
        pais: host.pais,
        descricao: host.descricao
    })
}

function* setarLocatario(action) {
    const db = getDatabase(app);

    var host = {
        codigoHospedagem: action.payload.codigoHospedagem,
        locatario: action.payload.locatario,
    }

    yield update(ref(db, `hospedagens/${host.codigoHospedagem}`), {
        locatario: host.locatario,
        disponivel: false,
    })
}
//<<<<<<<<<<<<<<<<<<<<<<< EDITAR HOSPEDAGEM


function* listarUsuarios() {
    //pega do banco de dados

    var isOk = false;
    const dbRef = yield ref(getDatabase(app), `users/`);
    var users = [];
    yield get(dbRef).then((snapshot) => {
        if (snapshot.exists()) {
            //transformar object em arrar

            users = snapshot.val();
            isOk = true;

            //
            var arr = Object.entries(users)
            users = arr;
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
            type: 'USUARIOS::LISTAR', payload: {
                users
            }
        })
    }

}

function* setarHospedagem(action) {
    yield put({
        type: 'HOSPEDAGEM::SETAR', payload: {
            codigoHospedagem: action.payload.codigoHospedagem,
            cidade: action.payload.cidade,
            pais: action.payload.pais,
            descricao: action.payload.descricao
        }
    })
}


function* zerarHospedagem(action) {
    yield put({ type: 'HOSPEDAGEM::ZERAR' })
}
function* excluirHospedagem(action) {
    const db = getDatabase(app);

    const host = {
        codigoHospedagem: action.payload.codigoHospedagem,
    }

    yield remove(ref(db, `hospedagens/${host.codigoHospedagem}`));
}

export default function* root() {

    yield takeLatest('REQUEST::USUARIO::CONECTAR', login);
    yield takeLatest('REQUEST::USUARIO::CADASTRAR', cadastrarUsuario);
    yield takeLatest('REQUEST::USUARIOS::LISTAR', listarUsuarios);
    yield takeLatest('REQUEST::USUARIO::EDITAR', editarUsuario);
    yield takeLatest('REQUEST::USUARIO::EXCLUIR', excluirUsuario);
    yield takeLatest('REQUEST::HOSPEDAGEM::CADASTRAR', cadastrarHospedagem);
    yield takeLatest('REQUEST::HOSPEDAGENS::LISTAR', listarHospedagens);
    yield takeLatest('REQUEST::HOSPEDAGEM::EDITAR', editarHospedagem);
    yield takeLatest('REQUEST::HOSPEDAGEM::SETAR::LOCATARIO', setarLocatario);
    yield takeLatest('REQUEST::HOSPEDAGEM::SETAR', setarHospedagem);
    yield takeLatest('REQUEST::HOSPEDAGEM::ZERAR', zerarHospedagem);
    yield takeLatest('REQUEST::HOSPEDAGEM::EXCLUIR', excluirHospedagem);






}
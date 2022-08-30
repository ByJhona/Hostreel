
import { get, getDatabase, ref } from "firebase/database";
import { getStorage, uploadBytes, uploadBytesResumable, ref as sRef, getDownloadURL } from "firebase/storage";
import app from "./firebase";

export function carregarFoto(codigoHospedagem){
    const storage = getStorage(app);
    const fotoRef = sRef(storage, `hospedagens/-NAe0YM2gAtgxrn2Pntk/`)

    getDownloadURL(fotoRef).then((data) => {
        console.log(data)
        return data
    })
}

export function buscarLocador(codigoLocador){
    const db = getDatabase(app)
    
     get( ref(db,`users/${codigoLocador}`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val())
            return snapshot.val();

        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    
}
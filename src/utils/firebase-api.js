
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
import './CardHospedagem.scss'


// routes
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { carregarFoto } from '../../utils/firebase-api';
//import { requestHospedagemCarregarFoto } from '../../actions/hospedagem';

export default function CardHospedagem({ hospedagem }) {

    return (
        <Link to={'/hospedagem/' + hospedagem[0]} className='card-info'>
        <div className='card-hospedagem'>
            <div className='card-foto' >
<img className='card-foto-foto' src={hospedagem[1].fotoUrl}/>
            </div>


            <div className='card-info'>
                <h3>Cid: {hospedagem[1].cidade}</h3>
                <h2>País: {hospedagem[1].pais}</h2>
                <h2>Desc: {hospedagem[1].descricao}</h2>
            </div>
        </div>
        </Link>
    )
}
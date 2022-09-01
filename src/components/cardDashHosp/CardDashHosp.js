import './CardDashHosp.scss'


// routes
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { carregarFoto } from '../../utils/firebase-api';
import { requestHospedagemSetar } from '../../actions/hospedagem';
//import { requestHospedagemCarregarFoto } from '../../actions/hospedagem';

export default function CardDashHosp({ hospedagem }) {
    const dispatch = useDispatch()

    return (
        <button className='card-dashboard-hospedagem' onClick={() => dispatch(requestHospedagemSetar(hospedagem[0], hospedagem[1].cidade, hospedagem[1].pais, hospedagem[1].descricao))}>
        <div >
            


            <div className='card-info-dash'>
                <h4>Codigo: {hospedagem[0]}</h4>
                <h4>Descrição: {hospedagem[1].descricao}</h4>

                
            </div>
        </div>
        </button>
    )
}
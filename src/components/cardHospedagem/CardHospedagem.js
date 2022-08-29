import './CardHospedagem.scss'


// routes
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//import { requestHospedagemCarregarFoto } from '../../actions/hospedagem';

export default function CardHospedagem({ hospedagem }) {
    const dispatch = useDispatch();
    useEffect(()=>{
        //Carrega a foto da hospedagem
        //dispatch(() => requestHospedagemCarregarFoto(hospedagem[0]))
    }, [])
    return (
        <Link to={'/hospedagem/' + hospedagem[0]} className='card-info'>
        <div className='card-hospedagem'>
            <div className='card-foto'>

            </div>


            <div className='card-info'>
                <h3>{hospedagem[1].cidade}</h3>
                <h2>{hospedagem[1].pais}</h2>
                <h2>{hospedagem[1].descricao}</h2>
            </div>
        </div>
        </Link>
    )
}
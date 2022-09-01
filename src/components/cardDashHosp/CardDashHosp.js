import './CardDashHosp.scss'
import { useDispatch } from 'react-redux';
import { requestHospedagemSetar } from '../../actions/hospedagem';

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
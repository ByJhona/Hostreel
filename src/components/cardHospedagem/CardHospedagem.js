import './CardHospedagem.scss'
// routes
import { Link } from "react-router-dom";
export default function CardHospedagem({ hospedagem }) {

    return (
        <Link style={{ textDecoration: 'none', color: 'black' }} to={'/hospedagem/' + hospedagem[0]} className='card-info'>
            <div className='card-hospedagem'>
                <div className='card-foto' >
                    <img className='card-foto-foto' src={hospedagem[1].fotoUrl} />
                </div>
                <div className='card-info'>
                    <h5>Cid: {hospedagem[1].cidade}</h5>
                    <h5>País: {hospedagem[1].pais}</h5>
                    <h5>Desc: {hospedagem[1].descricao}</h5>
                </div>
            </div>
        </Link>
    )
}
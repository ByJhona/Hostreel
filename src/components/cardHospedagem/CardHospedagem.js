import './CardHospedagem.scss'


// routes
import { Link } from "react-router-dom";

export default function CardHospedagem({ hospedagem }) {
    return (
        <Link to={'/cadastro/' + hospedagem[0]} className='card-info'>
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
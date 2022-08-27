import './CardHospedagem.scss'

export default function CardHospedagem({cidade, pais, descricao}){
    return(
        <div className='card-hospedagem'>
            <div className='card-foto'>

            </div>

            <div className='card-info'>
                <h3>{cidade}</h3>
                <h2>{pais}</h2>
                <h2>{descricao}</h2>
            </div>
        </div>
    )
}
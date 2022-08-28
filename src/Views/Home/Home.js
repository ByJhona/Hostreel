import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { requestHospedagemListar } from "../../actions/hospedagem";
import CardHospedagem from '../../components/cardHospedagem/CardHospedagem'
import Nav from '../../components/nav/Nav'
import './Home.scss'

function Home({ hospedagens }) {
    const dispatch = useDispatch();
    useEffect(() => console.log(dispatch(requestHospedagemListar())), []);

    const [pesquisa, setPesquisa] = useState('')


    return (
        <div className='home-body'>
            <Nav />

            <div className='home-body-pesquisa'>
                <input className='home-input-pesquisa' type='text' placeholder='Pesquise a cidade aqui...' onChange={(e) => setPesquisa(e.target.value)} />
            </div>
            <div className='home-body-conteudos'>

                <h1>Fique de olho nas novidades</h1>

                <div className='home-cards'>
                    {hospedagens.map((data, index) => {
                        if (data[1].cidade.includes(pesquisa)) return <CardHospedagem hospedagem={data} />
                        if (pesquisa == '') return <CardHospedagem hospedagem={data} />
                        //retorna string resultado nao encontrado


                    })}
                </div>
            </div>


        </div>
    )
}

const mapStateToProps = state => (console.log(state.hospedagem), {
    hospedagens: state.hospedagem
});

export default connect(mapStateToProps)(Home);
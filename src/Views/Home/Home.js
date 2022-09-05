import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { requestHospedagensListar } from "../../actions/hospedagens";
import { requestUsuariosListar } from "../../actions/usuarios";
import CardHospedagem from '../../components/cardHospedagem/CardHospedagem'
import Nav from '../../components/nav/Nav'
import './Home.scss'

function Home({ hospedagens }) {
    const dispatch = useDispatch();
    useEffect((() => {
        try {
            dispatch(requestHospedagensListar())
            dispatch(requestUsuariosListar())
        } catch (error) {

        }
    }), []);

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
                        if (data[1].cidade.toUpperCase().includes(pesquisa.toUpperCase()) && data[1].disponivel) return <CardHospedagem hospedagem={data} />
                        if (pesquisa == '' && data[1].disponivel) return <CardHospedagem hospedagem={data} />
                        //retorna string resultado nao encontrado


                    })}
                </div>

            </div>
            <svg width="100%" height="200px" fill="none" viewBox="0 0 1400 180" preserveAspectRatio="none"><path fill="#008000" d=" M 0 67 C 273,183 822,-40 1920,106 V 359 H 0 V 67 Z"><animate repeatCount="indefinite" fill="#454599" attributeName="d" dur="15s" values=" M0 77 C 473,283 822,-40 1920,116 V 359 H 0 V 67 Z; M0 77 C 473,-40 1222,283 1920,136 V 359 H 0 V 67 Z; M0 77 C 973,260 1722,-53 1920,120 V 359 H 0 V 67 Z; M0 77 C 473,283 822,-40 1920,116 V 359 H 0 V 67 Z "></animate></path></svg>

        </div>
    )
}

const mapStateToProps = state => ( {
    hospedagens: state.hospedagens
});

export default connect(mapStateToProps)(Home);
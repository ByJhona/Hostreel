import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { requestHospedagemListar } from "../../actions/hospedagem";
import CardHospedagem from '../../components/cardHospedagem/CardHospedagem'
import Nav from '../../components/nav/Nav'

function Home({ hospedagens }) {
    const dispatch = useDispatch();
    useEffect(() => console.log(dispatch(requestHospedagemListar())), []);

    return (
        <div>
            <Nav/>

            <img src="https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&i
            xid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Girl in a jacket" width="100%" height="720"/>

            <div className='ultimas-hospedagens-adicionadas'>

            </div>
            

            {hospedagens.map((data, index) => {
                return <CardHospedagem cidade={data[1].cidade} pais={data[1].pais} descricao={data[1].descricao}/>
                
            })}


        </div>
    )
}

const mapStateToProps = state => (console.log(state.hospedagem),{
    hospedagens: state.hospedagem
});

export default connect(mapStateToProps)(Home);
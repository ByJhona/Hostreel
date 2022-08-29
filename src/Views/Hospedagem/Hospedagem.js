import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
//rotas
import { Routes, Route, useParams } from "react-router-dom";


import Nav from '../../components/nav/Nav'


function Hospedagem({hospedagens}) {

    const props = useParams()
    const [hospedagem, setHospedagem] = useState([])

    const buscaHospedagem = () => {
        hospedagens.map((data) => {
            if (data[0] == props.codigoHospedagem) setHospedagem(data) 
            console.log(hospedagem)
        })
    }

    useEffect(() => {
        buscaHospedagem()
    },[hospedagem])

    return (
        <div className='hospedagem-body'>
            <Nav />

            <div>oi
                <h1>{hospedagem[1]?.cidade}</h1>
            </div>



        </div>
    )
}

const mapStateToProps = state => ({
    hospedagens: state.hospedagem
});

export default connect(mapStateToProps)(Hospedagem);
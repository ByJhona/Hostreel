import './Nav.scss'
import React, { useState } from 'react';

//MUI Comp
import Avatar from '@mui/material/Avatar';

import Box from '@mui/material/Box';

//Rotas
import { Link } from "react-router-dom";

//Redux
import { connect } from 'react-redux';






function Nav({ nome, islogin }) {
    return (
        <div className="nav">
            <h1 className='nav-logo'>Hostreel</h1>
            <div className='nav-opcoes'>
                <Link style={{ textDecoration: 'none' }} to='/home'>Início</Link>

                {islogin ? <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Link style={{ textDecoration: 'none' }} to='/dashboard'>Dashboard</Link>

                    <Link style={{ textDecoration: 'none', margin: '1rem' }} to='/home'>Sair</Link>
                    <div>{nome.toUpperCase()}</div>
                    <Avatar sx={{ width: 32, height: 32, margin: 1 }}>{nome.toUpperCase().substr(0, 1)}</Avatar>
                </Box> : <Link to='/login' className='bnt-nav-entrar'>Entrar</Link>}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        islogin: state.usuario.islogin,
        nome: state.usuario.nome,
    }
}

export default connect(mapStateToProps)(Nav);
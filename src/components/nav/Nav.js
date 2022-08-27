import './Nav.scss'
import React, { useState } from 'react';

//MUI Comp
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import Box from '@mui/material/Box';

//Rotas
import { Link } from "react-router-dom";

//Redux
import { useDispatch } from 'react-redux';
import { requestSair } from '../../actions/login';
import { connect } from 'react-redux';






function Nav({ nome, islogin }) {
    return (
        <div className="nav">
            <h1 className='nav-logo'>Hostreel</h1>
            <div className='nav-opcoes'>
            <Link to='/home'>Início</Link>

            {islogin ? <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <div>{nome}</div>
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
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
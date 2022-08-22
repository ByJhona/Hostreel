import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index'
// Rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Cadastro from "./Views/Cadastro/Cadastro"
import Login from "./Views/Login/Login"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='cadastro' element={<Cadastro/>}/>
          <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


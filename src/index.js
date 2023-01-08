import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/index';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Artigos from './pages/Artigos';
import Catalogo from './pages/Catalogo';
import Header from './components/Header/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header/>
    < Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/artigos/:id' element={<Artigos/>}/>
      <Route path='/catalogo/' element={<Catalogo/>}/>

    </Routes>
  </BrowserRouter>
);


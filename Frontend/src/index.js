import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client';

import App from './App';

import Login from "./pages/Login/Login"
import Home from "./pages/Home/Home"
import NewAccount from "./pages/Account/NewAccount"
import NewItem from "./pages/Item/NewItem"
import NewProduct from "./pages/Product/NewProduct"
import Itens from "./pages/Item/Itens"
import Products from "./pages/Product/Products"

import reportWebVitals from './reportWebVitals';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/criarconta" element={<NewAccount />} />
          <Route path="/criaritem" element={<NewItem />} />
          <Route path="/criarproduto" element={<NewProduct />} />
          <Route path="/materiais" element={<Itens />} />
          <Route path="/produtos" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.scss';
import Layout from './components/layout/Layout';
import ProductPage from './components/product/Product';
import AdminPage from './components/admin/Admin';
import Home from './components/home/Home';
import AboutUs from './components/aboutUs/AboutUs';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/assortment" element={<ProductPage />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

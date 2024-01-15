import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <React.Fragment className='container'>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path='*' element={<Error/>}/> */}
        </React.Fragment>
      </Routes>
      <Footer />
    </>
  );
}

export default App;

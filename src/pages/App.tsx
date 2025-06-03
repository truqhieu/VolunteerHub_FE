import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import HomeDetail from './homedetail/HomeDetail';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<HomeDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

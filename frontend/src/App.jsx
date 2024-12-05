// App.jsx
import { useState } from 'react';
import './App.css';
import Login from './components/login/login.jsx';
import Register from './components/register/register.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/home/home.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App; 

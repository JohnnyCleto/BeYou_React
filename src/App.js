import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/cadastrar" element={<RegisterForm />} />
        <Route path="/home" element={<Home />} /> {/* Caminho para o componente Home */}
      </Routes>
    </Router>
  );
};

export default App;





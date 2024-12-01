import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct imports
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;

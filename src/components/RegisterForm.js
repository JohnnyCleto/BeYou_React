import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImg from './img/background_img.jpg';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }
    alert('Cadastro realizado com sucesso!');
    navigate('/home');
  };

  const styles = {
    background_img: {
      backgroundImage: `url(${backgroundImg})`,
      minHeight: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    formulario: {
      maxWidth: '425px',
      width: '90%',
      padding: '10px',
      backgroundColor: 'rgba(251, 251, 251, 0.591)',
      color: 'black',
      border: 'solid 1px #6c4539',
      borderRadius: '30px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      position: 'absolute',
      right: '200px',
    },
    label: {
      display: 'block',
      textAlign: 'left',
      marginBottom: '5px',
      marginTop: '15px',
      fontSize: '15px',
      color: '#6c4539',
    },
    input: {
      width: '90%',
      padding: '15px',
      margin: '10px 0',
      border: '1px solid #6c4539',
      backgroundColor: '#ffecfc',
      borderRadius: '50px',
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '10px',
    },
    checkboxInput: {
      marginRight: '8px',
    },
    botao: {
      backgroundColor: '#f45bf4',
      color: 'white',
      padding: '10px 20px',
      border: 'solid 2px #6c4539',
      cursor: 'pointer',
      width: '60%',
      fontSize: '16px',
      borderRadius: '50px',
      marginTop: '10px',
      transition: 'opacity 0.3s ease',
      opacity: hovered ? 1 : 0.8,
    },
    link: {
      color: '#f45bf4',
      textDecoration: 'none',
      fontSize: '14px',
      marginTop: '10px',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.background_img}>
      <form style={styles.formulario} onSubmit={handleRegister}>
        <h1>Cadastro</h1>

        <label htmlFor="name" style={styles.label}>
        <b>Nome:</b>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Digite seu nome"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label htmlFor="email" style={styles.label}>
        <b>E-mail:</b>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Digite seu email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label htmlFor="password" style={styles.label}>
        <b>Senha:</b>
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Digite sua senha"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label htmlFor="confirmPassword" style={styles.label}>
        <b>Confirme sua Senha:</b>
        </label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <div style={styles.checkboxContainer}>
          <input
            type="checkbox"
            id="concordo"
            required
            style={styles.checkboxInput}
          />
          <label htmlFor="concordo">
            Li e concordo com os{' '}
            <a href="/termos" style={styles.link}>
              termos de uso
            </a>
          </label>
        </div>

        <button
          type="submit"
          style={styles.botao}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

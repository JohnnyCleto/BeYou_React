import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImg from './img/background_img.jpg';

// Componente funcional LoginForm para a página de login
const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hoveredLogin, setHoveredLogin] = useState(false); // Estado para hover do botão "Entrar"
  const [hoveredRegister, setHoveredRegister] = useState(false); // Estado para hover do botão "Cadastrar"

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/home');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const handleRegister = () => {
    navigate('/cadastrar');
  };
  
  // Estilos inline para os elementos da interface
  const styles = {
    background_img: {
      // Estilização do fundo da página com uma imagem
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
      // Estilo do contêiner do formulário
      maxWidth: '400px',
      width: '90%',
      padding: '20px',
      backgroundColor: 'white',
      border: '1px solid #6c4539',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      position: 'absolute',
      right: '200px',
      color: 'black',
      textAlign: 'center',

    },

    label: {
      // Estilo das labels (texto descritivo dos campos)
      display: 'block',
      textAlign: 'left',
      marginBottom: '0px',
      marginTop: '0px',
      fontSize: '15px',
      color: '#6c4539',
    },
    input: {
      // Estilo dos campos de texto
      width: '90%',
      padding: '15px',
      margin: '10px 0',
      border: '1px solid #6c4539',
      backgroundColor: '#ffecfc',
      borderRadius: '50px',
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
    },
    botaoLogin: {
      opacity: hoveredLogin ? 1 : 0.8, // Hover específico para o botão "Entrar"
    },
    botaoRegister: {
      opacity: hoveredRegister ? 1 : 0.8, // Hover específico para o botão "Cadastrar"
    },
     link: {
      // Estilo do link para a página de recuperação de senha
      color: '#f45bf4',
      textDecoration: 'none',
      fontSize: '14px',
      display: 'block',
      marginTop: '5px',
      marginbottom: '5px',
      textAlign: 'center',
    },
  };

  // Estrutura do formulário com JSX
  return (
    <div style={styles.background_img}>
      <form style={styles.formulario} onSubmit={handleLogin}>
        <h1>Login</h1>

        {/* Campo E-mail */}
        <label htmlFor="email" style={styles.label}>
          <b>E-mail:</b>
        </label>
        <input
          id="email"
          type="text"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Atualiza o estado ao digitar
          required
          style={styles.input}
        />

        {/* Campo Senha */}
        <label htmlFor="password" style={styles.label}>
          <b>Senha:</b>
        </label>
        <input
          id="password"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Atualiza o estado ao digitar
          required
          style={styles.input}
        />

        {/* Link para recuperação de senha */}
        <a href="/identificar" style={styles.link}>
          Esqueceu a Senha?
        </a>

       {/* Botão de login */}
       <button
          type="submit"
          style={{ ...styles.botao, ...styles.botaoLogin }}
          onMouseOver={() => setHoveredLogin(true)}
          onMouseOut={() => setHoveredLogin(false)}
        >
          Entrar
        </button>

        {/* Botão de cadastro */}
        <button
          type="button"
          style={{ ...styles.botao, ...styles.botaoRegister }}
          onMouseOver={() => setHoveredRegister(true)}
          onMouseOut={() => setHoveredRegister(false)}
          onClick={handleRegister}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

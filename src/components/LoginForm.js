import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImg from './img/background_img.jpg';

// Componente funcional LoginForm para a página de login
const LoginForm = () => {
  const navigate = useNavigate(); // Hook para navegação entre rotas

  // Estados para armazenar email e senha digitados pelo usuário
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hoveredButton, setHoveredButton] = useState(null); // Estado para controle de hover do botão

  // Função para tratar o evento de login ao submeter o formulário
  const handleLogin = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    if (email && password) {
      // Se ambos os campos estão preenchidos, redireciona para a página home
      navigate('/home');
    } else {
      alert('Por favor, preencha todos os campos.'); // Exibe alerta caso algum campo esteja vazio
    }
  };

  // Função para redirecionar o usuário para a página de cadastro
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
      color: 'black',
      border: 'solid 1px #6c4539',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      position: 'absolute',
      right: '200px',
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
    botaoHover: {
      opacity: 5,
    },
    botaoNormal: {
      opacity: 0.8,
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
          style={{
            ...styles.botao,
            ...(hoveredButton === 'login' ? styles.botaoHover : styles.botaoNormal),
          }}
          onMouseOver={() => setHoveredButton('login')}
          onMouseOut={() => setHoveredButton(null)}
        >
          Entrar
        </button>
        <button
          type="button"
          style={{
            ...styles.botao,
            ...(hoveredButton === 'register' ? styles.botaoHover : styles.botaoNormal),
          }}
          onClick={handleRegister}
          onMouseOver={() => setHoveredButton('register')}
          onMouseOut={() => setHoveredButton(null)}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

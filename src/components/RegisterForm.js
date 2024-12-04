import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImg from './img/background_img.jpg';

// Componente funcional RegisterForm para um formulário de cadastro
const RegisterForm = () => {
  // useNavigate é usado para navegação programática entre páginas
  const navigate = useNavigate();

  // Estado para gerenciar o hover (efeito de opacidade no botão)
  const [hovered, setHovered] = useState(false);

  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Função que atualiza os dados do formulário conforme o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Função que valida e processa o envio do formulário
  const handleRegister = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem.'); // Alerta caso as senhas não coincidam
      return;
    }
    alert('Cadastro realizado com sucesso!'); // Exibe mensagem de sucesso
    navigate('/home'); // Redireciona o usuário para a página inicial
  };

  // Estilos inline para os elementos da interface
  const styles = {
    background_img: {
      // Fundo do formulário com uma imagem
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
      // Estilo do formulário
      maxWidth: '425px',
      width: '90%',
      padding: '10px',
      backgroundColor: 'white',
      color: 'black',
      border: 'solid 1px #6c4539',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      position: 'absolute',
      right: '200px',
    },
    label: {
      // Estilo das labels dos campos
      display: 'block',
      textAlign: 'left',
      marginBottom: '0px',
      marginTop: '0px',
      fontSize: '15px',
      color: '#6c4539',
    },
    input: {
      // Estilo dos inputs (campos de texto e senha)
      width: '90%',
      padding: '15px',
      margin: '10px 0',
      border: '1px solid #6c4539',
      backgroundColor: '#ffecfc',
      borderRadius: '50px',
    },
    checkboxContainer: {
      // Contêiner para o checkbox
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '10px',
    },
    checkboxInput: {
      // Estilo do checkbox
      marginRight: '8px',
    },
    botao: {
      // Estilo do botão de cadastro
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
      opacity: hovered ? 1 : 0.8, // Efeito de hover
    },
    link: {
      // Estilo dos links
      color: '#f45bf4',
      textDecoration: 'none',
      fontSize: '14px',
      marginTop: '10px',
      textAlign: 'center',
    },
  };

  // Estrutura do formulário com JSX
  return (
    <div style={styles.background_img}>
      <form style={styles.formulario} onSubmit={handleRegister}>
        <h1>Cadastro</h1>

        {/* Campo Nome */}
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

        {/* Campo E-mail */}
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

        {/* Campo Senha */}
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

        {/* Campo Confirmar Senha */}
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

        {/* Checkbox para termos de uso */}
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

        {/* Botão de cadastro */}
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

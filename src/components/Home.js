import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const abrirMenu = () => {
      document.getElementById("menu").style.width = "250px";
    };
  
    const fecharMenu = () => {
      document.getElementById("menu").style.width = "0";
    };
  
    const styles = {
      global: {
        fontFamily: 'arial, sans-serif',
        margin: '0 auto',
        padding: 0,
        boxSizing: 'border-box',
      },
      body: {
        backgroundColor: '#FFC9E9',
      },
      header: {
        backgroundImage: 'url(img/Textura_Rosa.jpg)',
        minHeight: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        color: '#6c4539',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '0.5px solid #6c4539',
      },
      logocontainer: {
        display: 'flex',
        alignItems: 'flex-start',
      },
      imgLogo: {
        width: '80px',
        height: 'auto',
        borderRadius: '50%',
        marginRight: '800px',
        alignItems: 'center',
        border: '2px solid #6c4539',
        cursor: 'pointer',
      },
      tres: {
        color: '#6c4539',
        cursor: 'pointer',
        ':hover': {
          color: '#5E17EB',
        },
      },
      menuicon: {
        height: '100%',
        width: '0px',
        position: 'fixed',
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: '#6c4539',
        overflowX: 'hidden',
        paddingTop: '60px',
        transition: 'width 0.5s ease',
      },
      menuiconLink: {
        padding: '5px 35px',
        textDecoration: 'none',
        fontSize: '30px',
        color: 'white',
        fontWeight: 'bold',
        display: 'block',
        transition: 'filter 0.3s ease',
      },
      menuiconLinkHover: {
        color: '#5E17EB',
        cursor: 'pointer',
      },
      fecharMenu: {
        position: 'absolute',
        top: 0,
        right: '25px',
        fontSize: '30px',
        fontWeight: 'bold',
        marginLeft: '50px',
      },
      perfil: {
        marginRight: 0,
        display: 'flex',
      },
      imgPerfil: {
        width: '80px',
        height: 'auto',
        borderRadius: '50%',
        transition: 'filter 0.3s ease',
        border: '2px solid #6c4539',
        alignItems: 'center',
        marginRight: '20px',
        ':hover': {
          filter: 'grayscale(100%)',
          borderColor: 'black',
        },
      },
      botaoPerfil: {
        cursor: 'pointer',
        padding: '15px',
        textAlign: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        marginLeft: 0,
        color: 'black',
        backgroundColor: '#fd99d5',
        border: 'solid 2px #6c4539',
        borderRadius: '20px',
        transition: 'color 0.3s ease',
        opacity: 0.8,
        ':hover': {
          backgroundColor: '#FFC9E9',
          borderColor: '#6c4539',
          color: 'white',
        },
      },
      h1: {
        textAlign: 'left',
        color: '#6c4539',
        fontWeight: 'bold',
        fontSize: '40px',
        marginBottom: '20px',
        marginLeft: '50px',
        marginTop: '20px',
      },
      promocaoLugares: {
        marginTop: '50px',
        overflow: 'auto',
        whiteSpace: 'nowrap',
      },
      promocaoLugaresImg: {
        marginBottom: '10px',
        width: '300px',
        height: '300px',
        marginLeft: '20px',
        borderRadius: '20%',
      },
      footer: {
        backgroundColor: '#b699f1',
        color: '#6c4539',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '5px solid #6c4539',
      },
    };  

    return (
      <div style={styles.global}>
        <header style={styles.header}>
          <div style={styles.logocontainer}>
            <img
              id="logoLink"
              style={styles.imgLogo}
              src={require('./img/logo_fio_roxo.jpg')}
              alt="Logo"
            />
          </div>
          <span style={styles.tres} onClick={abrirMenu}>
            &#9776;
          </span>
          <div style={styles.perfil}>
            <a href="perfil.html" id="perfilLink">
              <img style={styles.imgPerfil} src={require('./img/perfil.eu.jpg')} alt="Perfil" />
            </a>
          </div>
          <button style={styles.botaoPerfil}>Seu perfil</button>
        </header>
    
        <div id="menu" style={styles.menuicon}>
          <a
            href="javascript:void(0)"
            style={styles.fecharMenu}
            onClick={fecharMenu}
          >
            &times;
          </a>
          <a style={styles.menuItem} href="#imagens_passar">Inicio</a>
          <a style={styles.menuItem} href="meu_carinho.html">Meu Carrinho</a>
          <a style={styles.menuItem} href="campo_de_pesquisa.html">Pesquisar</a>
          <a style={styles.menuItem} href="agendamentos.html">Agendamentos</a>
          <a style={styles.menuItem} href="minha_loja.html">Minha Loja</a>
        </div>
    
        <main style={styles.main}>
          <div style={styles.promocaoLugares}>
            <h1 style={styles.h1}>Promoções de Serviços</h1>
            {['promocao1.jpg', 'promocao2.jpg', 'promocao3.jpeg', 'promoçao4.jpg', 'promocao5.jpeg'].map((img, index) => (
              <img
                key={index}
                style={styles.promoImg}
                src={require(`./img/${img}`)}
                alt={`Promoção ${index + 1}`}
              />
            ))}
          </div>
    
          <div style={styles.promocaoProdutos}>
            <h1 style={styles.h1}>Promoções de Produtos</h1>
            {['promocao_produto1.jpg', 'promocao_produto2.jpg', 'promocao_produto3.jpg', 'Promocao_produto4.jpg'].map((img, index) => (
              <img
                key={index}
                style={styles.promoImg}
                src={require(`./img/${img}`)}
                alt={`Produto ${index + 1}`}
              />
            ))}
          </div>
    
          <div style={styles.logosEmpresas}>
            <h1 style={styles.h1}>Lojas em destaque</h1>
            {['loja1.jpg', 'loja2.jpg', 'loja3.jpg', 'loja4.jpg', 'loja5.jpg', 'loja6.jpg', 'loja7.jpg'].map((img, index) => (
              <img
                key={index}
                style={styles.logoImg}
                src={require(`./img/${img}`)}
                alt={`Loja ${index + 1}`}
              />
            ))}
          </div>
    
          <div style={styles.voceSabia}>
            <h1 style={styles.h1}>Você sabia...?</h1>
            {['voce_sabia1.jpg', 'voce_sabia2.jpg', 'voce_sabia3.jpg', 'voce_sabia4.jpg', 'voce_sabia5.jpg'].map((img, index) => (
              <img
                key={index}
                style={styles.voceSabiaImg}
                src={require(`./img/${img}`)}
                alt={`Você sabia ${index + 1}`}
              />
            ))}
          </div>
        </main>
    
        <footer style={styles.footer}>
          <div style={styles.footerContent}></div>
        </footer>
      </div>
    );    
  };
  
    export default Home;
      



import React from 'react';

const Home = () => {
  const abrirMenu = () => {
    document.getElementById("menu").style.width = "250px";
  };

  const fecharMenu = () => {
    document.getElementById("menu").style.width = "0";
  };

  const headerStyle = {
    backgroundImage: 'url("img/Textura_Rosa.jpg")',
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
  };

  const logoStyle = {
    width: '80px',
    height: 'auto',
    borderRadius: '50%',
    marginRight: '800px',
    alignItems: 'center',
    border: '2px solid #6c4539',
    cursor: 'pointer',
  };

  const menuStyle = {
    height: '100%',
    width: '0',
    position: 'fixed',
    zIndex: 1,
    top: '0',
    left: '0',
    backgroundColor: '#6c4539',
    overflowX: 'hidden',
    paddingTop: '60px',
    transition: 'width 0.5s ease',
  };

  const linkStyle = {
    padding: '5px 5px 5px 35px',
    textDecoration: 'none',
    fontSize: '30px',
    color: 'white',
    fontWeight: 'bold',
    display: 'block',
    transition: 'filter 0.3s ease',
  };

  const imgPerfilStyle = {
    width: '80px',
    height: 'auto',
    borderRadius: '50%',
    transition: 'filter 0.3s ease',
    border: '2px solid #6c4539',
    alignItems: 'center',
    marginRight: '20px',
  };

  const imgStyle = {
    marginBottom: '10px',
    width: '300px',
    height: '300px',
    marginLeft: '20px',
    borderRadius: '20%',
  };

  const promocaoLugaresStyle = {
    marginTop: '50px',
    overflow: 'auto',
    whiteSpace: 'nowrap',
    scrollbarWidth: 'none',
  };

  const footerStyle = {
    backgroundColor: '#b699f1',
    display: 'flex',
    color: '#6c4539',
    padding: '20px',
    alignItems: 'center',
    justifyContent: 'space-between',
    border: '5px solid #6c4539',
  };

  return (
    <div>
      <header style={headerStyle}>
        <div className="logocontainer">
          <img
            id="logoLink"
            className="img_logo"
            style={logoStyle}
            src={require('./img/logo_fio_roxo.jpg')}
            alt="Logo"
          />
        </div>
        <span className="tres" onClick={abrirMenu}>
          &#9776;
        </span>
        <div className="perfil">
          <a href="perfil.html" id="perfilLink">
            <img className="img_perfil" style={imgPerfilStyle} src={require('./img/perfil.eu.jpg')} alt="eu" />
          </a>
        </div>
        <button className="botao_perfil">Seu perfil</button>
      </header>

      <div id="menu" className="menuicon" style={menuStyle}>
        <a href="javascript:void(0)" className="fecharmenu" onClick={fecharMenu}>
          &times;
        </a>
        <a href="#imagens_passar" style={linkStyle}>Inicio</a>
        <a href="meu_carinho.html" style={linkStyle}>Meu Carrinho</a>
        <a href="campo_de_pesquisa.html" style={linkStyle}>Pesquisar</a>
        <a href="agendamentos.html" style={linkStyle}>Agendamentos</a>
        <a href="minha_loja.html" style={linkStyle}>Minha Loja</a>
      </div>

      <main>
        <div className="promocao_lugares" style={promocaoLugaresStyle}>
          <h1>Promoções de Serviços</h1>
          <img className="img1" style={imgStyle} src={require('./img/promocao1.jpg')} alt="alongamento_unha" />
          <img className="img2" style={imgStyle} src={require('./img/promocao2.jpg')} alt="progressiva" />
          <img className="img3" style={imgStyle} src={require('./img/promocao3.jpeg')} alt="corte" />
          <img className="img4" style={imgStyle} src={require('./img/promoçao4.jpg')} alt="tranças" />
          <img className="img5" style={imgStyle} src={require('./img/promocao5.jpeg')} alt="massagem" />
        </div>

        <div className="promocao_produtos" style={promocaoLugaresStyle}>
          <h1>Promoções de Produtos</h1>
          <img className="img1" style={imgStyle} src={require('./img/promocao_produto1.jpg')} alt="" />
          <img className="img2" style={imgStyle} src={require('./img/promocao_produto2.jpg')} alt="" />
          <img className="img3" style={imgStyle} src={require('./img/promocao_produto3.jpg')} alt="" />
          <img className="img3" style={imgStyle} src={require('./img/Promocao_produto4.jpg')} alt="" />
        </div>

        <div className="logos_empresas" style={promocaoLugaresStyle}>
          <h1>Lojas em destaque</h1>
          <img className="img1" style={imgStyle} src={require('./img/loja1.jpg')} alt="" />
          <img className="img2" style={imgStyle} src={require('./img/loja2.jpg')} alt="" />
          <img className="img3" style={imgStyle} src={require('./img/loja3.jpg')} alt="" />
          <img className="img4" style={imgStyle} src={require('./img/loja4.jpg')} alt="" />
          <img className="img5" style={imgStyle} src={require('./img/loja5.jpg')} alt="" />
          <img className="img6" style={imgStyle} src={require('./img/loja6.jpg')} alt="" />
          <img className="img7" style={imgStyle} src={require('./img/loja7.jpg')} alt="" />
        </div>

        <div className="voce_sabia" style={promocaoLugaresStyle}>
          <h1>Você sabia...?</h1>
          <img className="img1" style={imgStyle} src={require('./img/voce_sabia1.jpg')} alt="" />
          <img className="img2" style={imgStyle} src={require('./img/voce_sabia2.jpg')} alt="" />
          <img className="img3" style={imgStyle} src={require('./img/voce_sabia3.jpg')} alt="" />
          <img className="img4" style={imgStyle} src={require('./img/voce_sabia4.jpg')} alt="" />
          <img className="img5" style={imgStyle} src={require('./img/voce_sabia5.jpg')} alt="" />
        </div>
      </main>

      <footer style={footerStyle}>
        <div className="footer"></div>
      </footer>
    </div>
  );
};

export default Home;

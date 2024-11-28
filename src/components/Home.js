import React from 'react';
import './Home.css';

const Home = () => {
  const abrirMenu = () => {
    document.getElementById("menu").style.width = "250px";
  };

  const fecharMenu = () => {
    document.getElementById("menu").style.width = "0";
  };

  return (
    <div>
      <header>
        <div className="logocontainer">
          <img
            id="logoLink"
            className="img_logo"
            src="img/new_logo.jpg"
            alt="Logo"
          />
        </div>
        <span className="tres" onClick={abrirMenu}>
          &#9776;
        </span>
        <div className="perfil">
          <a href="perfil.html" id="perfilLink">
            <img className="img_perfil" src="img/perfil.eu.jpg" alt="eu" />
          </a>
        </div>
        <button className="botao_perfil">Seu perfil</button>
      </header>

      <div id="menu" className="menuicon">
        <a href="javascript:void(0)" className="fecharmenu" onClick={fecharMenu}>
          &times;
        </a>
        <a href="#imagens_passar">Inicio</a>
        <a href="meu_carinho.html">Meu Carrinho</a>
        <a href="campo_de_pesquisa.html">Pesquisar</a>
        <a href="agendamentos.html">Agendamentos</a>
        <a href="minha_loja.html">Minha Loja</a>
      </div>

      <main>
        <div className="promocao_lugares">
          <h1>Promoções de Serviços</h1>
          <img className="img1" src="img/promocao1.jpg" alt="alongamento_unha" />
          <img className="img2" src="img/promocao2.jpg" alt="progressiva" />
          <img className="img3" src="img/promocao3.jpeg" alt="corte" />
          <img className="img4" src="img/promoçao4.jpg" alt="tranças" />
          <img className="img5" src="img/promocao5.jpeg" alt="massagem" />
        </div>

        <div className="promocao_produtos">
          <h1>Promoções de Produtos</h1>
          <img className="img1" src="img/promocao_produto1.jpg" alt="" />
          <img className="img2" src="img/promocao_produto2.jpg" alt="" />
          <img className="img3" src="img/promocao_produto3.jpg" alt="" />
          <img className="img4" src="img/promoçao_produto4" alt="" />
          <img className="img5" src="img/promocao_produto5." alt="" />
        </div>

        <div className="logos_empresas">
          <h1>Lojas em destaque</h1>
          <img className="img1" src="img/loja1.jpg" alt="" />
          <img className="img2" src="img/loja2.jpg" alt="" />
          <img className="img3" src="img/loja3.jpg" alt="" />
          <img className="img4" src="img/loja4.jpg" alt="" />
          <img className="img5" src="img/loja5.jpg" alt="" />
          <img className="img6" src="img/loja6.jpg" alt="" />
          <img className="img7" src="img/loja7.jpg" alt="" />
        </div>

        <div className="voce_sabia">
          <h1>Você sabia...?</h1>
          <img className="img1" src="img/voce_sabia1.jpg" alt="" />
          <img className="img2" src="img/voce_sabia2.jpg" alt="" />
          <img className="img3" src="img/voce_sabia3.jpg" alt="" />
          <img className="img4" src="img/voce_sabia4.jpg" alt="" />
          <img className="img5" src="img/voce_sabia5.jpg" alt="" />
        </div>
      </main>

      <footer>
        <div className="footer"></div>
      </footer>
    </div>
  );
};

export default Home;

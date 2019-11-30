import React from "react";
import { Container } from "../Main/Main-Styled.js";
import { Link } from "react-router-dom";
import imgVoltar from "../../assets/arrow-left.png";
import imgChat from "../../assets/chat.png";

export default function Game() {
  return (
    <Container>
      <div className="Header" align="center">
        <div className="Left">
          <Link to={"/Main"}>
            <img src={imgVoltar} alt="" className="Imagem" />
          </Link>
        </div>
        <div className="Center">
          Game: {window.location.pathname.replace("/Game/", "")}
        </div>
        <div style={{ clear: "both" }}></div>
      </div>

      <div className="Corpo">
        <div className="Linha">
          <p>
            Em uma tarde de sábado ensolarada, João estava em sua casa passando
            um tempo, e estava faminto, então resolveu ir até a lanchonete do
            centro da cidade para comer o seu lanche preferido.​
          </p>
        </div>
      </div>
      <div className="Corpo2">
        <div className="Linha">
          <p>
            Selecione a ordem correta das ações para o João chegar ao
            Restaurante
          </p>
          <img src={imgChat} alt="" className="ImagemChat" />
        </div>
      </div>

      <div style={{ clear: "both" }}></div>

      <div className="Rodape" align="center">
        Confirmar
      </div>
    </Container>
  );
}

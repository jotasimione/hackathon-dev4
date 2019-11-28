import React from "react";
import { Container } from "../Main/Main-Styled.js";
import { Link } from "react-router-dom";
import imgVoltar from "../../assets/arrow-left.png";

export default function Game() {
  return (
    <Container>
      <div className="Header" align="center">
        <div className="Left">
          <Link to={"/Main"}>
            <img src={imgVoltar} alt="" className="Imagem" />
          </Link>
        </div>
        <div className="Right">
          Game: {window.location.pathname.replace("/Game/", "")}
        </div>
        <div style={{ clear: "both" }}></div>
      </div>

      <div className="Corpo">
        <div className="Linha">
          Aeww
          <div style={{ clear: "both" }}></div>
        </div>
      </div>

      <div className="Rodape" align="center">
        Confirmar
      </div>
    </Container>
  );
}

import React, { useState } from "react";
// import './Index.css';

import { Container } from "./Main-Styled.js";
// import { Card } from "../Card/Card-Styled.js";

import { Link } from "react-router-dom";

const inicialData = [
  {
    id: 1,
    title: "Jogo 1",
    image: "https://img.icons8.com/color/70/000000/cottage.png"
  },
  {
    id: 2,
    title: "Jogo 2",
    image: "https://img.icons8.com/color/70/000000/administrator-male.png"
  },
  {
    id: 3,
    title: "Jogo 3",
    image: "https://img.icons8.com/color/70/000000/filled-like.png"
  },
  {
    id: 4,
    title: "Jogo 4",
    image: "https://img.icons8.com/color/70/000000/facebook-like.png"
  },
  {
    id: 5,
    title: "Jogo 5",
    image: "https://img.icons8.com/color/70/000000/shutdown.png"
  },
  {
    id: 6,
    title: "Jogo 6",
    image: "https://img.icons8.com/color/70/000000/traffic-jam.png"
  }
];

export default function Main() {
  const [data] = useState(inicialData);

  return (
    <Container>
      <div className="Header" align="center">
        EasyLogic
      </div>

      <div className="Corpo">
        <div className="Linha">
          {data.map(card => (
            <Link to={"./Game/" + card.id}>
              {/* <a href="http://www.uol.com.br"> */}
              <div align="center" id={card.id} className="Card">
                <h2>{card.title}</h2>
                <img src={card.image} alt="" />
              </div>
              {/* </a> */}
            </Link>
          ))}
          <div style={{ clear: "both" }}></div>
        </div>
      </div>

      <div className="Rodape" align="center">
        DEV4
      </div>

      {/* <Linha>
        {data.map(card => (
          <Columna>
            <Card>{card.title}</Card>
          </Columna>
        ))}
      </Linha> */}
    </Container>
  );
}

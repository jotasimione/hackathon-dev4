import React from "react";
// import { Container } from "../Main/Main-Styled.js";

export default function Game() {
  return (
    // <Container>
      <>
      <div className="header">Game: {window.location.pathname.replace("/Game/", "")}</div>
      <div className="corpo">tomar no cú</div>
      </>
    // </Container>
  );
}

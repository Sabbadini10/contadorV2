import { Card, Col, Container, Row } from "react-bootstrap";
import Boton from "./Boton";
import Contador from "./Contador";
import React, { useState } from "react";
import styles from "../../styles/styles.module.css";

function CounterPractica() {
  // utilizo un hook
  const [numClick, setNumClick] = useState(0);

  //creo la funcion para aumentar click
  function manejarClick() {
    setNumClick(numClick + 1);
  }

  //creo la funcion reiniciar click a 0
  const reiniciarClick = () => {
    setNumClick(numClick - numClick);
  };

  return (
    <Container>
      <Col
        xs={12}
        lg={{ span: 6, offset: 3 }}
        className="row justify-content-center mt-5 mb-5"
      >
        <Row>
          <Card className={styles.contedorContador} style={{ width: "20rem" }}>
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Text className={styles.CardText}>
                <Contador className={styles.contador} numClick={numClick} />
              </Card.Text>
              <Boton
                manejarClick={true ? manejarClick : reiniciarClick}
                reiniciarClick={true ? reiniciarClick : manejarClick}
              />
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </Container>
  );
}

export default CounterPractica;

<div class="container">
  <div class="row justify-content-center mt-5 mb-5">
    <div class="col-sm-4">
      <div class="card bg-dark _card _fondo rounded-5">
        <div class="card-body">
          <div class="text-danger text-center mt-5 fs-1">codea.app</div>
          <div class="efecto-texto mt-5 mb-5">
            <p class="texto display-3" data-texto="ANIMACIÓN CSS">
              ANIMACIÓN CSS
            </p>
            <div class="gradiente"></div>
            <div class="luces"></div>
          </div>
          <div class="text-center mt-5 mb-5">
            <button class="btn btn-outline-danger btn-sm rounded-pill pt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;

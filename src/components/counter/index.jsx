import { Card, Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Boton from "./Boton";
import Contador from "./Contador";
import React, { useState } from "react";
import styles from "../../styles/style.module.css";

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
    <Container className={styles.contenedorPrincipal}>
      <Col className="row justify-content-center mt-5 mb-5">
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

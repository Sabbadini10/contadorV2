import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/styles.module.css";

function Boton({ manejarClick, reiniciarClick }) {
  // recibimos los props
  return (
    //creamos un if ternario para darle la clase al boton

    //creamos el evente listener para que escuche el evento
    <>
      <Button
        className={styles.botonClick}
        variant="success"
        onClick={manejarClick}
      >
        Click
      </Button>
      <Button
        className={styles.botonReiniciar}
        variant="danger"
        onClick={reiniciarClick}
      >
        Reiniciar
      </Button>
    </>
  );
}

export default Boton;

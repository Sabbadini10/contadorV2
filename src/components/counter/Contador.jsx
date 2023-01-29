import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../../styles/style.module.css";

function Contador({ numClick }) {
  return <div className={styles.contador}>{numClick}</div>;
}

export default Contador;

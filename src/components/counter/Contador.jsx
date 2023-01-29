import React from "react";
import styles from "../../styles/styles.module.css";

function Contador({ numClick }) {
  return <div className={styles.contador}>{numClick}</div>;
}

export default Contador;

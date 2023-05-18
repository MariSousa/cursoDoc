import React from "react";
import { Link } from "react-router-dom";

import styles from "./ButtonHome.module.css";

const ButtonHome = () => {
  return (
    <button className={styles.buttonHome}>
      <Link to="/listacursos" className={styles.buttonHome__Link}>
        Voltar para a página inicial
      </Link>
    </button>
  );
};

export default ButtonHome;

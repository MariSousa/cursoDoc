import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Feito com muito carinho por:
        <a
          className={styles.footer__link}
          href="https://www.linkedin.com/in/mariana-de-sousa-desenvolvimento-web/"
          target="_blank"
        >
          Mari de Sousa
        </a>
      </p>
    </footer>
  );
};

export default Footer;

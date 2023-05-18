import React from "react";

import styles from "./Contato.module.css";

const Contato = () => {
  return (
    <div className={styles.contato}>
      <h2>Quem eu sou?</h2>
      <p>
        Meu nome é Mariana e sou desenvolvedora front-end júnior. Estou
        estudando React, mas sempre volto em alguns conceitos básicos de
        JavaScript.
      </p>
      <p>
        Atualmente, também, estou me aprofundando bastante sobre o tema
        acessibilidade web. Estou fazendo dois cursos, um na edX, um curso
        criado pela W3C junto com a UNESCO, e o outro curso é na Udacity,
        oferecido pelo Google.
      </p>
      <p>
        Entre em contato comigo para trabalharmos juntos, tirar dúvidas, ou
        apenas compartilhar conhecimento
      </p>
      <ul>
        <li>
          WhatsApp:{" "}
          <a
            href="https://api.whatsapp.com/send?phone=5521975775053"
            target="_blank"
          >
            (21)975775053
          </a>
        </li>
        <li>
          Email:{" "}
          <a href="mailto:mari.sousa.136@gmail.com" target="_blank">
            mari.sousa.136@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/mariana-de-sousa-desenvolvimento-web/"
            target="_blank"
          >
            Mari de Sousa
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contato;

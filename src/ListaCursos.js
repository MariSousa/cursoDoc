import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import DadosContexto from "./Context";

import styles from "./ListaCursos.module.css";
import "./App.css";

const ListaCursos = () => {
  const dados = useContext(DadosContexto);
  const { id } = useParams();
  const [linguagens, setLinguagens] = React.useState([]);
  if (dados !== null && dados !== undefined) {
    dados.forEach((dado) => {
      if (!linguagens.includes(dado.linguagem)) {
        setLinguagens([...linguagens, dado.linguagem]);
      }
    });
  }
  console.log(linguagens);
  return (
    <div className="container">
      <h1 className={styles.container__titulo}>
        Curso - desenvolvimento front-end
      </h1>
      <div className="container__grid">
        {dados &&
          linguagens &&
          linguagens.map((linguagem) => (
            <div key={linguagem} className="grid__conteudo">
              <h2 className="conteudo__titulo">{linguagem}</h2>
              <Link to={`/listacursos/${linguagem}`} className="conteudo__link">
                Clique para mais informações sobre o curso
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListaCursos;

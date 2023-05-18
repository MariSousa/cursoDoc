import React, { useContext } from "react";

import DadosContexto from "./Context";
import { Link, useNavigate, useParams } from "react-router-dom";
import ButtonHome from "./ButtonHome";

import styles from "./CursoDetalhes.module.css";

const CursoDetalhes = () => {
  const { id } = useParams();
  const dados = useContext(DadosContexto);
  const navigate = useNavigate();

  //busca no conjunto de dados o índice do capítulo atual a partir do id que foi passado na URL
  const indiceCapAtual = dados && dados.findIndex((dado) => dado.id === id);
  //alcula o índice do próximo capítulo, que é o índice atual mais um
  const indiceProximoCap = indiceCapAtual + 1;

  const proximoCapitulo = () => {
    //navega para a página do próximo capítulo, que é obtido a partir do índice calculado na linha anterior
    navigate(`/curso/${dados[indiceProximoCap].id}`);
  };

  return (
    <div className="container">
      {dados &&
        dados
          .filter((dado) => dado.id === id)
          .map((dado) => (
            <div key={dado.id} className={styles.container__conteudo}>
              <h2 className="">Capítulo: {dado.capitulo}</h2>
              <p>{dado.paragrafo}</p>
              <div>
                {dado.body.map((corpo) => (
                  <div key={corpo.subtitulo}>
                    <h3>{corpo.subtitulo}</h3>
                    <p>{corpo.paragrafo}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      <div className={styles.container__button}>
        {dados && indiceProximoCap < dados.length ? (
          <button onClick={proximoCapitulo} className={styles.button__proximo}>
            Próximo Capítulo
          </button>
        ) : null}

        <ButtonHome />
      </div>
    </div>
  );
};

export default CursoDetalhes;

import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import DadosContexto from "./Context";

const ListaCursos = () => {
  const dados = useContext(DadosContexto);
  const { linguagem } = useParams();

  return (
    <div className="container">
      <div className="container__grid">
        {dados &&
          dados
            .filter((dado) => dado.linguagem === linguagem)
            .map((dado) => (
              <div key={dado.id}>
                <div className="grid__conteudo">
                  <h3 className="conteudo__titulo">{dado.titulo}</h3>
                  <Link to={`/curso/${dado.id}`} className="conteudo__link">
                    Clique para acessar o curso completo
                  </Link>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ListaCursos;

import React, { createContext } from "react";

export const DadosContexto = createContext();

export function Context({ children }) {
  const [dados, setDados] = React.useState();
  React.useEffect(() => {
    fetch("./cursos.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((resposta) => resposta.json())
      .then((json) => {
        console.log(json);
        setDados(json);
      });
  }, []);

  return (
    <DadosContexto.Provider value={dados}>{children}</DadosContexto.Provider>
  );
}

export default DadosContexto;

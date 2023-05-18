import React from "react";

import styles from "./Sobre.module.css";

const Sobre = () => {
  return (
    <div className={styles.sobre}>
      <h2>Sobre o Projeto</h2>
      <p>
        Comecei a fazer esse projeto no curso da plataforma francesa Educrack.
        Fiz o curso básico de React, apenas para relembrar pontos básicos,
        estudar os conceitos por outra perspectiva, e nesse curso tinha uma
        tarefa de exibir alguns cursos.
      </p>
      <p>
        O nome é 'Apprenti' pois significa aprendiz em francês. E se pronuncia:
        a-pRen-ti
      </p>
      <p>
        Porém eu quis ir além do próprio curso, e fiz um projeto mais complexo.
        A ideia do projeto é consumir um json que contém o material de todos os
        cursos. Exibir a lista dos cursos, depois, ao clicar em um curso, exibir
        os capítulos e ao clicar em um capítulo, exibir o conteúdo do curso.
      </p>
      <p>
        Os cursos são apenas exemplos. Eu utilizei a própria documentação de
        cada linguagem. Não está completo, ainda falta muita coisa da
        documentação. Mas serve apenas como base para criar o projeto.
      </p>
      <p>
        Com esse projeto eu conseguir usar e entender o conteito de Context. Foi
        a primeira vez que usei o context sozinha, ou seja, sem ver tutorial nem
        estar em uma aula de qualquer curso. Também quis treinar sobre as rotas,
        como configurar as rotas para cada curso, para cada capítulo. E quero
        explicar extamente o que aprendi com minhas próprias palavras:
      </p>
      <div className={styles.explicacao}>
        <h3>Context</h3>
        <h4>
          O projeto tem um componente chamado 'Context.js' e nesse componente:
        </h4>
        <div className={styles.lista}>
          <ul>
            <li>Import o createContext do React</li>
            <li>Crio um novo contexto (DadosContexto)</li>
            <li>Na função Context, tem a propriedade children</li>
            <li>Declaro dados e setDados com useState</li>
            <li>Dentro do useEffect, eu faço um fetch para o arquivo json</li>
            <li>Todos os dados desse arquivo eu insiro em 'setDados'</li>
            <li>
              E por fim eu retorno esse valores para todos os 'children' que
              recebrão esse contexto
            </li>
          </ul>
          <h4>No App.js:</h4>
          <ul>
            <li>Eu importo todo o contexto</li>
            <li>Englobo todo o conteudo do site nesse contexto</li>
          </ul>
          <h4>Nos componentes que usam o contexto:</h4>
          <ul>
            <li>Eu importo o Dadoscontexto</li>
            <li>
              E declaro uma variável para armazenar todos esses dados (const
              dados = useContext(DadosContexto))
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.explicacao}>
        <h3>Rotas</h3>
        <h4>No App.js</h4>
        <div className={styles.lista}>
          <ul>
            <li>
              Eu defini que ListaCursos, poderá conter qualquer url (route
              path="/listacursos/*" element=ListaCursos)
            </li>
            <li>
              ListaCap, que irá exibir os capítulos, exibirá os capítulos por
              linguagem (route path="/listacursos/:linguagem" element=ListaCap)
            </li>
            <li>
              CursoDetalhes, que exibirá o conteudo dos cursos, será definido
              pelo id (oute path="/curso/:id" element=CursoDetalhes)
            </li>
          </ul>
        </div>
      </div>

      <h3>Erros</h3>
      <p>
        O projeto contem alguns erros. Eu não consegui inserir imagens, ainda
        estou pensando em uma forma melhor de armazenar o conteudo dos cursos,
        incluindo imagens. Estava pensando em colocar no FireBase.
      </p>
      <p>
        O botão 'Próximo Capítulo' não consegui fazer com que ele pare no último
        capítulo do curso atual, então ele sempre pula para o próximo curso.{" "}
      </p>
      <p>
        Caso alguma coisa dê errado, o conteúdo todo some. Para voltar, é
        preciso ir até a página inicial, atualizar a página que tudo voltará ao
        normal. Eu não sei de onde vem esse erro.
      </p>
      <p>
        O menu mobile não fecha sozinho ao ir para outra página. É preciso
        clicar novamente no menu para fechar.
      </p>

      <h3>Aprendizado</h3>
      <p>
        Aprendi muitas coisas com esse projetos, como já citei antes. E também
        foi muito divertido fazer. Ele faz parte do meu portfólio, e é
        importante destacar que fiz o projeto sozinha, sem seguir nenhum
        tutorial.
      </p>
      <p>Para me conhecer melhor, você pode acessar o link no rodapé.</p>
    </div>
  );
};

export default Sobre;

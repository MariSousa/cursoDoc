import CursoDetalhes from "./CursoDetalhes";
import ListaCursos from "./ListaCursos";
import ListaCap from "./ListaCap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Context } from "./Context";
import Header from "./Header";
import Footer from "./Footer";
import Sobre from "./Sobre";
import Contato from "./Contato";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Context>
          <Header />
          <Routes>
            <Route path="/" element={<ListaCursos />} />
            <Route path="/listacursos/*" element={<ListaCursos />} />
            <Route path="/listacursos/:linguagem" element={<ListaCap />} />
            <Route path="/curso/:id" element={<CursoDetalhes />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
          <Footer />
        </Context>
      </BrowserRouter>
    </div>
  );
}

export default App;

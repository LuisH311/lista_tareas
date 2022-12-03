import "./App.css";
import {  Route, Routes, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import Apps from "./Tasksito";
import Nosotros from "./Componentes/Nosotros";

function App() {
  const Home = lazy(() => import("./Componentes/Home"));
  const About = lazy(() => import("./Componentes/About"));
  const Contact = lazy(() => import("./Componentes/Nosotros"));

  return (
    <div className="App">
      <nav>
        <ul className='Lista'>
        <li>
        <Link to="/"> Home</Link>
        </li>
        <li>
        <Link to="/About"> Tasks</Link>
        </li>
        <li>
        <Link to="/Nosotros"> Sobre_Nosotros</Link>
        </li>
        </ul>
      </nav>

      <Suspense fallback={<p> cargando...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Apps />} />
          <Route path="nosotros" element={<Nosotros />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

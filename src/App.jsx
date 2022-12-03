import "./App.css";
import {  Route, Routes, Link } from "react-router-dom";
import { lazy, Suspense } from "react";

function App() {
  const Home = lazy(() => import("./Componentes/Home"));
  const About = lazy(() => import("./Componentes/About"));
  const Contact = lazy(() => import("./Componentes/Contact"));

  return (
    <div className="App">
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/About"> About</Link>
        <Link to="/Contact"> Contact</Link>
      </nav>

      <Suspense fallback={<p> cargando...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

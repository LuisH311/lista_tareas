import React from "react";
import aplicativo from "../img/aplicativo.png";

function Home() {
  return (
    <div>
      <h1>
        <b>Bienvenidos a mi Aplicativo de Tareas</b>
      </h1>
      <img src={aplicativo} />
    </div>
  );
}

export default Home;

import { useState } from "react";
import "./App.css";
import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import MiOrg from "./componentes/MiOrg";
function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(true);
  
  const cambiarMostrar = () => {
  actualizarMostrar(!mostrarFormulario)
  };
  return (
    <div className="App">
      <Header />
      {/* {mostrarFormulario === true? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;

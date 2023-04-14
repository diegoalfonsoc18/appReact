import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../boton";

const Formulario = () => {
  const ManejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar envio", e);
  };

  return (
    <section className="formulario">
      <form onSubmit={ManejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required />
        <CampoTexto titulo="Puesto" placeholder="Ingresar Puesto" required />
        <CampoTexto
          titulo="Foto"
          placeholder="ingresar enlace de foto"
          required
        />
        <ListaOpciones />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;

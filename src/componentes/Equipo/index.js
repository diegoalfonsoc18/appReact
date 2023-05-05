import "./Equipo.css";

import Colaborador from "../colaborador";
const Equipo = (props) => {
  //Destructuracion
  const { colorPrimario, titulo } = props.datos;

  const obj = {
    backgroundColor: props.datos.colorSecundario,
  };

  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <section className="equipo" style={obj}>
      <h3 style={estiloTitulo}>{titulo}</h3>
      <div className="colaboradores">
        <Colaborador />
        <Colaborador />
        <Colaborador />
        <Colaborador />
      </div>
    </section>
  );
};

export default Equipo;

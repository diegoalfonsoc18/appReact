import "./Equipo.css";

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
      <div className="colaboradores"></div>
    </section>
  );
};

export default Equipo;

import "./ListaOpciones.css";

const ListaOpciones = () => {
  const equipos = [
    "Progracion",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Movil",
    "Innovacion y Gestion",
  ];
  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select>
        <option>Progracion</option>
        <option>Front End</option>
        <option>Data Science</option>
        <option>Devops</option>
        <option>UX y Diseño</option>
        <option>Movil</option>
        <option>Innovacion y Gestion</option>
      </select>
    </div>
  );
};

export default ListaOpciones;

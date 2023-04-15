import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {
    console.log(props)
    const [mostrar, actualizarMostrar] = useState(true);

    const manejarClick = () => {
    console.log("Monstrar/Ocultar elemento", !mostrar);
        actualizarMostrar(!mostrar)
    }

    return <section className="orgSection">
        <h3 className="tittle">     Mi organización</h3>
        <img src="/img/add.png" alt="icon" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;

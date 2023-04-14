import { useState } from "react";
import "./MiOrg.css";

const MiOrg = () => {


    const [nombre, actualizarNombre] = useState('Diego');
    const [mostrar, actualizarMostrar] = useState(true);

    const manejarClick = () => {
        console.log("Monstrar/Ocultar elemento");
        actualizarMostrar(!mostrar)
    }

    return <section className="orgSection">
        <h3 className="tittle">Mi organización</h3>
        <img src="/img/add.png" alt="icon" onClick={manejarClick}/>
    </section>
}

export default MiOrg;

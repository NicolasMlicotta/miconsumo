import { useState } from "react";
import styles from "./Admin.module.css";

function Admin() {
  const [anio, setAnio] = useState("");
  const [mes, setMes] = useState("");
  const [habilitado, setHabilitado] = useState(false);

  const handleHabilitar = (e) => {
    setHabilitado(e.target.value);
  };
  const handleAnio = (e) => {
    setAnio(e.target.value);
  };
  const handleMes = (e) => {
    setMes(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Habilitar / Bloquear</h1>
      <p>
        hola{mes}
        {anio}
        {habilitado}
      </p>
      <select name="anio" id="anio" onChange={(e) => handleAnio(e)}>
        <option value="">Año</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
      </select>
      <select name="mes" id="mes" onChange={(e) => handleMes(e)}>
        <option value="">Mes</option>
        <option value="1">Enero</option>
        <option value="2">Febrero</option>
        <option value="3">Marzo</option>
        <option value="4">Abril</option>
        <option value="5">Mayo</option>
        <option value="6">Junio</option>
        <option value="7">Julio</option>
        <option value="8">Agosto</option>
        <option value="9">Septiembre</option>
        <option value="10">Octubre</option>
        <option value="11">Noviembre</option>
        <option value="12">Diciembre</option>
      </select>
      <select
        name="habilitar"
        id="habilitar"
        onChange={(e) => handleHabilitar(e)}
      >
        <option value="false">Acción</option>
        <option value="true">Habilitar</option>
        <option value="false">Bloquear</option>
      </select>
      <label htmlFor="date">Fecha límite</label>
      <input type="date" id="date" name="date" />
      <button>Guardar Cambios</button>
    </div>
  );
}

export default Admin;

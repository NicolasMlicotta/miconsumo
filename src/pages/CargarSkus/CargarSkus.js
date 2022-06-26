import { useState } from "react";
import styles from "./CargarSkus.module.css";
function CargarSkus() {
  const [anio, setAnio] = useState("");
  const [mes, setMes] = useState("");
  const [importe, setImporte] = useState("");
  const [file, setFile] = useState({});
  const [confirmar, setConfirmar] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleAnio = (e) => {
    setAnio(e.target.value);
  };
  const handleMes = (e) => {
    setMes(e.target.value);
  };
  const handleImporte = (e) => {
    setImporte(e.target.value);
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <div className={styles.wrapper}>
      <h1>Cargar SKUs</h1>
      {confirmar ? (
        <>
          <h3>Los SKUs del mes de $Junio$ ya fueron cargados previamente</h3>
          <p>
            ¿Querés sobreescribir la lista?{" "}
            <h3>
              Tené en cuenta que todos los usuarios deberán cargar el consumo
              nuevamente.
            </h3>
          </p>
          <label for="checkbox">
            <input
              id="checkbox"
              name="checkbox"
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            Si, estoy seguro de sobreescibir todos los skus.
          </label>
          <button>Sobreescribir</button>
        </>
      ) : (
        <>
          <h3>Descargue la plantilla</h3>
          <label htmlFor="archivo">
            Seleccione el archivo
            <input
              type="file"
              id="archivo"
              name="archivo"
              onChange={(e) => handleFile(e)}
            />
          </label>
          <select name="anio" id="anio" onChange={(e) => handleAnio(e)}>
            <option value="">Año</option>
            <option value="3022">2022</option>
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
          <label htmlFor="date">
            Fecha límite
            <input type="date" id="date" name="date" />
          </label>
          <label htmlFor="importe">
            Importe Disponible
            <input
              type="number"
              id="importe"
              name="importe"
              value={importe}
              onChange={(e) => handleImporte(e)}
            />
          </label>
          <button>Guardar Cambios</button>
        </>
      )}
    </div>
  );
}

export default CargarSkus;

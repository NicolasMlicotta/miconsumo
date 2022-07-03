import React from "react";
import styles from "./Status.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
function Status() {
  return (
    <div className="wrapper">
      <h1>Estado de la carga</h1>
      <header className={styles.status}>
        <h3 className={styles.t1}>Habilitados</h3>
        <h3 className={styles.t2}>Cargados</h3>
        <h3 className={styles.t3}>Restan</h3>
        <p className={styles.p1}>Habilitados</p>
        <p className={styles.p2}>Cargados</p>
        <p className={styles.p3}>Restan</p>
      </header>
      <span className={styles.top}>
        <SearchBar placeholder={"Buscar SKU"} />
        <select name="categoria" id="categoria">
          <option value="">Categoria</option>
          <option value="2022">Categoria</option>
          <option value="2023">Categoria</option>
          <option value="2024">Categoria</option>
          <option value="2025">Categoria</option>
        </select>
      </span>
      <div>
        <ul>
          <li>SKU1</li>
          <li>SKU2</li>
          <li>SKU3</li>
          <li>SKU4</li>
          <li>SKU5</li>
          <li>SKU6</li>
          <li>SKU7</li>
          <li>SKU8</li>
          <li>SKU9</li>
          <li>SKU10</li>
        </ul>
      </div>
    </div>
  );
}

export default Status;

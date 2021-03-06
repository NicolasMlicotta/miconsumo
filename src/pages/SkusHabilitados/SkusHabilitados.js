import React from "react";
import styles from "./SkusHabilitados.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";

function SkusHabilitados() {
  return (
    <div className={styles.wrapper}>
      <h1>SKUs Habilitados</h1>
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

export default SkusHabilitados;

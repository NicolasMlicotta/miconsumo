import React from "react";
import styles from "./ShoppingCart.module.css";

function ShoppingCart() {
  return (
    <div className={styles.wrapper}>
      <h4>Carrito de compras</h4>
      <div className={styles.gridWrapper}>
        <p className={styles.unidad}>$/unidad</p>
        <p className={styles.total}>Total</p>
        {/* item 1 */}
        <p className={styles.descripcion}>
          Cerveza Brahma 24un. 473mlasdasdasdasd
        </p>
        <p className={styles.cantidad}>- 0 + </p>
        <p className={styles.unidad}>$2000</p>
        <p className={styles.total}>$2000</p>
        {/* item 2 */}
        <p className={styles.descripcion}>Cerveza Brahma 24un. 473ml</p>
        <p className={styles.cantidad}>- 0 + </p>
        <p className={styles.unidad}>$2000</p>
        <p className={styles.total}>$2000</p>
        {/* item 3 */}
        <p className={styles.descripcion}>Cerveza Brahma 24un. 473ml</p>
        <p className={styles.cantidad}>- 0 + </p>
        <p className={styles.unidad}>$2000</p>
        <p className={styles.total}>$2000</p>
        {/* totales */}
        <div className={styles.line}></div>
        <p className={styles.cantidad}> 5 unid. </p>
        <p className={styles.unidad}></p>
        <p className={styles.total}>$4200</p>
      </div>
      <div className={styles.confirm}>
        <button>Cargar Consumo</button>
      </div>
    </div>
  );
}

export default ShoppingCart;

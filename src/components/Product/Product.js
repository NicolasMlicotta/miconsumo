import styles from "./Product.module.css";

function Product(props) {
  // const data = props.data;
  const { sku, precio, descripcion, categoria } = {
    sku: "7028",
    precio: 2000,
    descripcion: "Cerveza Brahma 24un. 473ml",
    categoria: "cervezas",
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgwrapper}>
        <img
          src="http://drive.google.com/uc?export=view&id=1v-nQLxcI_0d1cA4vA5iu9z-GOLExjNDp"
          alt={descripcion}
          width={200}
          height={200}
        />
      </div>
      <h3 className={styles.price}>${precio}</h3>
      <p className={styles.description}>{descripcion}</p>
      <div className={styles.quantity}>
        <button>- restar</button>
        <h3>0</h3>
        <button>+ agregar</button>
      </div>
    </div>
  );
}

export default Product;

import styles from "./Store.module.css";
import { productos } from "../../utilities/ArrayProductos";
import NavBar from "../../components/NavBar/NavBar";
import Product from "../../components/Product/Product";
function Store() {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <div className={styles.productsWrapper}>
        {productos.map((product, index) => {
          return <Product data={product} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Store;

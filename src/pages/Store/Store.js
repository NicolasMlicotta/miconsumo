import styles from "./Store.module.css";
import { productos } from "../../utilities/ArrayProductos";
import NavBar from "../../components/NavBar/NavBar";
import Product from "../../components/Product/Product";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
function Store() {
  const arrayMenu = [
    {
      title: "PROMOS",
      items: [
        { text: "primer item", to: "a" },
        { text: "primer item", to: "a" },
        { text: "primer item", to: "a" },
      ],
    },
    {
      title: "CERVEZAS",
      items: [
        { text: "primer item", to: "a" },
        { text: "primer item", to: "a" },
        { text: "primer item", to: "a" },
      ],
    },
    {
      title: "GASEOSAS",
      items: [
        { text: "primer item", to: "a" },
        { text: "primer item", to: "a" },
        { text: "primer item", to: "a" },
      ],
    },
    {
      title: "AGUAS E ISOTÓNICAS",
      items: [
        { text: "primer item", to: "a" },
        { text: "primer item", to: "a" },
        { text: "primer item", to: "a" },
      ],
    },
  ];
  return (
    <div className={styles.wrapper}>
      <NavBar data={arrayMenu} />
      <div className={styles.productsWrapper}>
        <div className={styles.order}>
          <h4 className={styles.bolder}>Ordernar por:</h4>
          <p>Mayor precio</p>
          <MdKeyboardArrowDown
            fontSize={"1.5rem"}
            color={"blue"}
            style={{ paddingTop: "3px" }}
          />
        </div>
        {productos.map((product, index) => {
          return <Product data={product} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Store;

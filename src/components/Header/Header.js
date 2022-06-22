import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";

function Header() {
  return (
    <div className={styles.wrapper}>
      <h1>Mi Consumo</h1>
      <ul className={styles.headerOptions}>
        <li>disponible: $4200</li>
        <li>
          <FaShoppingCart size={32} />
        </li>
        <li>
          <BsPersonCircle size={32} />
        </li>
      </ul>
    </div>
  );
}

export default Header;

import styles from "./Header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import SearchBar from "../SearchBar/SearchBar";
import CustomLink from "../CustomLink/CustomLink";

function Header() {
  return (
    <div className={styles.wrapper}>
      <CustomLink to="/">
        <div className={styles.title}>
          <h1>Mi Consumo</h1>
        </div>
      </CustomLink>
      <SearchBar />
      <ul className={styles.headerOptions}>
        <li>disponible: $4200</li>
        <li>
          <CustomLink to="/shoppingcart">
            <div className={styles.shopwrapper}>
              <FaShoppingCart size={32} className={styles.cart} />
              <p className={styles.quantity}> 5</p>
            </div>
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/profile">
            <BsPersonCircle size={28} color="black" />
          </CustomLink>
        </li>
        <li>
          <CustomLink to="/admin">
            <p>Admin</p>
          </CustomLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;

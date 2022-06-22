import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowDropUpFill } from "react-icons/ri";
import styles from "./NavBarDropdown.module.css";
import NavDropDownItem from "./NavDropDownItem";
import { useState } from "react";

function NavBarDropdown(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.category}>
        <RiArrowDownSFill size={24} />
        <h3>{props.children}</h3>
      </div>
      <ul className={styles.items}>
        {/* reemplazar por dropdownitem */}
        <li className={styles.item}>hola</li>
        <li className={styles.item}>hola</li>
        <li className={styles.item}>hola</li>
      </ul>
    </div>
  );
}

export default NavBarDropdown;

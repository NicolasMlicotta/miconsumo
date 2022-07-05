import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowDropUpFill } from "react-icons/ri";
import styles from "./NavBarDropdown.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBarDropdown(props) {
  const [open, setOpen] = useState(false);
  const arrayItems = props.items;
  return (
    <div className={styles.wrapper}>
      <div className={styles.category}>
        <RiArrowDownSFill size={24} />
        <h3>{props.children}</h3>
      </div>
      <ul className={styles.items}>
        {/* reemplazar por dropdownitem */}
        {arrayItems?.map((item, index) => {
          return (
            <Link key={item + index} className={styles.item} to={item.to}>
              {item.text}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default NavBarDropdown;

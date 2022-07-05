import styles from "./NavBar.module.css";
import NavBarDropdown from "../NavBarDropdown/NavBarDropdown";

function NavBar(props) {
  const arrayMenu = props.data;
  return (
    <nav className={styles.wrapper}>
      <h4>$Junio 2022$</h4>
      {arrayMenu.map((item, index) => {
        return (
          <NavBarDropdown key={index + item.title} items={item.items}>
            {item.title}
          </NavBarDropdown>
        );
      })}
    </nav>
  );
}

export default NavBar;

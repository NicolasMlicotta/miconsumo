import styles from "./NavBar.module.css";
import NavBarDropdown from "../NavBarDropdown/NavBarDropdown";

function NavBar() {
  return (
    <div className={styles.wrapper}>
      <h4>$Junio 2022$</h4>
      <NavBarDropdown>PROMOS</NavBarDropdown>
      <NavBarDropdown>CERVEZAS</NavBarDropdown>
      <NavBarDropdown>GASEOSAS</NavBarDropdown>
      <NavBarDropdown>AGUAS E ISOTÓNICAS</NavBarDropdown>
    </div>
  );
}

export default NavBar;

import React from "react";
import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Perfil</h3>
      <p className={styles.text}>Nombre: Nicolás Mlicotta</p>
      <p className={styles.text}>Sector: Logística</p>
      <p className={styles.text}>Último consumo cargado el 25/06/2022</p>
      <button>Cerrar Sesión</button>
    </div>
  );
}

export default Profile;

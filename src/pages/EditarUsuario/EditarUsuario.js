import React from "react";
import UserForm from "../../components/UserForm/UserForm";
import styles from "./EditarUsuario.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";

function EditarUsuario() {
  return (
    <div>
      <h1>Editar Usuario</h1>
      <UserForm
        firstName="Nico"
        lastName="Mlicotta"
        dni="36893895"
        sector="Logística"
      />
    </div>
  );
}

export default EditarUsuario;

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./UserForm.module.css";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  dni: Yup.number().typeError("Ingrese un número").min(7).required("Required"),
});

export const UserForm = ({
  firstName = "",
  lastName = "",
  dni = "",
  sector = "Logística",
}) => {
  return (
    <Formik
      initialValues={{
        firstName: firstName,
        lastName: lastName,
        dni: dni,
        sector: sector,
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.nico}>
          <label htmlFor="firstName">Nombre</label>
          <Field name="firstName" />

          <label htmlFor="lastName">Apellido</label>
          <Field name="lastName" />

          <label htmlFor="dni">DNI</label>
          <Field name="dni" type="text" />

          <label htmlFor="sector">Sector</label>
          <Field as="select" name="sector">
            <option value="Logística">Logística</option>
            <option value="Ventas">Ventas</option>
          </Field>

          <ul>
            {errors.firstName && touched.firstName ? (
              <li>{errors.firstName}</li>
            ) : null}
            {errors.lastName && touched.lastName ? (
              <li>{errors.lastName}</li>
            ) : null}
            {errors.dni && touched.dni ? <li>{errors.dni}</li> : null}
          </ul>

          <span className={styles.errorMessage}>
            <button type="submit">Cargar Usuario</button>
          </span>
        </Form>
      )}
    </Formik>
  );
};
export default UserForm;

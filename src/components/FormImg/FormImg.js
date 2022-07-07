import React from "react";
import styles from "./FormImg.module.css";
function FormImg() {
  return (
    <form>
      <input type="number" name="sku" id="sku" />
      <input type="file" name="skuimg" id="skuimg" />
    </form>
  );
}

export default FormImg;

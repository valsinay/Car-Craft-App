import React from "react";
import styles from "./NotFound.module.scss";
import "../../images/404page.png";

const NotFound = () => {
  return (
    <div className={styles.image404}>
      <img src={require("../../images/carbroken.png")} alt="" />
    </div>
  );
};

export default NotFound;

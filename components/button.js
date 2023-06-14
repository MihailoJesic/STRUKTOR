import React from "react";
import styles from "./button.module.css";

function button(props) {
  return (
    <div>
      <a className={styles.button} href={props.link}>
        {props.buttonText}
      </a>
    </div>
  );
}

export default button;

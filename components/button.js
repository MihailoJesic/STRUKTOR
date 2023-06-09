import React from "react";
import styles from "./button.module.css";

function button(props) {
  console.log(`💚💚💚💚💚`);
  return (
    <div>
      <a className={styles.button} href={props.link}>
        {props.buttonText}
      </a>
    </div>
  );
}

export default button;

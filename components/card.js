import Image from "next/image";
import React from "react";
import styles from "./card.module.css";

function card(props) {
  return (
    <section className={styles.card}>
      <Image
        src={props.image}
        className={styles.thumbnail}
        alt={props.altText}
        sizes="100%"
      />{" "}
      <div className={styles.textContainer}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.text}>{props.text}</div>
        <div>
          <a className={styles.button} href={props.link}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}

export default card;

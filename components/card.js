import Image from "next/image";
import React from "react";
import styles from "./card.module.css";

function card(props) {
  return (
    <section className={styles.card}>
      <div>
        <Image
          src={props.image}
          className={styles.thumbnail}
          alt={props.altText}
          sizes="100%"
        />{" "}
      </div>
      <div>{props.title}</div>
      <div>{props.text}</div>
    </section>
  );
}

export default card;

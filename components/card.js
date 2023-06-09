import Image from "next/image";
import React from "react";
import styles from "./card.module.css";

function card(props) {
  const { title, text, image, altText, buttonText, link } = props.data;

  return (
    <section className={styles.card}>
      <Image
        src={image}
        className={styles.thumbnail}
        alt={altText}
        sizes="100%"
        fill={true}
      />{" "}
      <div className={styles.textContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
        <div>
          <a className={styles.button} href={link}>
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}

export default card;

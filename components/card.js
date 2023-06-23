import Image from "next/image";
import React from "react";
import styles from "./card.module.css";
import Button from "./button.js";

function card(props) {
  const { title, text, image, altText, buttonText, link, width, height } =
    props.data;

  function generateButton(link, buttonText) {
    if (!buttonText || !link) {
      return;
    } else {
      return <Button link={link} buttonText={buttonText} />;
    }
  }

  return (
    <section className={styles.card}>
      <a href={image} target="_blank" className={styles.imageLink}>
        <img
          src={image}
          className={styles.image}
          alt={altText}
          sizes="100%"
          width={width}
          height={height}
        />{" "}
      </a>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.text}>{text}</div>
        {generateButton(link, buttonText)}
      </div>
    </section>
  );
}

export default card;

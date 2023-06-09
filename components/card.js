import Image from "next/image";
import React from "react";
import styles from "./card.module.css";
import Button from "./button.js";

function card(props) {
  const { title, text, image, altText, buttonText, link } = props.data;

  function generateButton(link, buttonText) {
    if (!buttonText || !link) {
      return;
    } else {
      return <Button link={link} buttonText={buttonText} />;
    }
  }

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
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.text}>{text}</div>
        {generateButton(link, buttonText)}
      </div>
    </section>
  );
}

export default card;

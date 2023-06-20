import Image from "next/image";
import React from "react";
import styles from "./galleryItem.module.css";

function card(props) {
  const { image, altText } = props.data;

  return (
    <a className={styles.itemContainer} href={image} target="_blank">
      <Image
        src={image}
        className={styles.item}
        alt={altText}
        sizes="100%"
        fill={true}
        key={props.keygen}
      />{" "}
    </a>
  );
}

export default card;

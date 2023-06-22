import Image from "next/image";
import React from "react";
import styles from "./galleryItem.module.css";

function card(props) {
  const { image, altText, width, height } = props.data;

  return (
    <a className={styles.itemContainer} href={image} target="_blank">
      <Image
        src={image}
        className={styles.item}
        alt={altText}
        sizes="100%"
        width={width}
        height={height}
        key={props.keygen}
      />{" "}
    </a>
  );
}

export default card;

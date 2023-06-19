import Image from "next/image";
import React from "react";
import styles from "./galleryItem.module.css";

function card(props) {
  const { image, altText } = props.data;

  return (
    <div className={styles.itemContainer}>
      <a href={image} target="_blank">
        <Image
          src={image}
          className={styles.item}
          alt={altText}
          sizes="100%"
          fill={true}
        />{" "}
      </a>
    </div>
  );
}

export default card;

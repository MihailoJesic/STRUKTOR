import Image from "next/image";
import styles from "./page.module.css";
import GalleryItem from "../../components/galleryItem.js";

export default function Home() {
  const galleryData = [
    {
      image: "/projekti/images (1).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (2).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (3).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (4).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (5).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (6).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (7).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (8).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (9).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (10).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (11).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (12).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (13).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (14).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (15).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (16).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (17).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (18).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (19).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/projekti/images (20).jpg",
      altText: "Betonska baza",
    },
  ];

  function galleryGenerator(arr) {
    const output = [];
    arr.forEach((el, i) => {
      output.push(<GalleryItem data={el} keygen={i} />);
    });
    return output;
  }

  return (
    <main className={styles.main}>
      <h1 className="title">Projekti</h1>
      <div className={styles.galleryPage}>
        {...galleryGenerator(galleryData)}
      </div>
    </main>
  );
}

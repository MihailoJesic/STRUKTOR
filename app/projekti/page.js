import Image from "next/image";
import styles from "./page.module.css";
import GalleryItem from "../../components/galleryItem.js";

export default function Home() {
  const galleryData = [
    {
      image: "/images/img (1).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/images/img (2).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/images/img (3).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/images/img (4).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/images/img (5).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/images/img (6).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/images/img (7).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/images/img (8).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/images/img (9).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/images/img (10).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/images/img (11).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/images/img (12).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/images/img (13).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/images/img (14).jpg",
      altText: "Betonska baza",
    },
    {
      image: "/images/img (15).jpg",
      altText: "Betonska baza",
    },
  ];

  function galleryGenerator(arr) {
    const output = [];
    arr.forEach((el) => {
      output.push(<GalleryItem data={el} />);
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

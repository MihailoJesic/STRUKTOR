import Image from "next/image";
import styles from "./page.module.css";
import GalleryItem from "../../components/galleryItem.js";

export default function Home() {
  const galleryData = [
    {
      image: "/projekti/images (1).jpg",
      altText: "Struktor Projekat",
      width: 1200,
      height: 1600,
    },
    {
      image: "/projekti/images (2).jpg",
      altText: "Struktor Projekat",
      width: 1200,
      height: 1600,
    },
    {
      image: "/projekti/images (3).jpg",
      altText: "Struktor Projekat",
      width: 1200,
      height: 1600,
    },
    {
      image: "/projekti/images (4).jpg",
      altText: "Struktor Projekat",
      width: 1200,
      height: 1600,
    },
    {
      image: "/projekti/images (5).jpg",
      altText: "Struktor Projekat",
      width: 1200,
      height: 1600,
    },
    {
      image: "/projekti/images (6).jpg",
      altText: "Struktor Projekat",
      width: 1200,
      height: 1600,
    },
    {
      image: "/projekti/images (7).jpg",
      altText: "Struktor Projekat",
      width: 1600,
      height: 1200,
    },
    {
      image: "/projekti/images (8).jpg",
      altText: "Struktor Projekat",
      width: 1106,
      height: 830,
    },
    {
      image: "/projekti/images (9).jpg",
      altText: "Struktor Projekat",
      width: 1360,
      height: 907,
    },
    {
      image: "/projekti/images (10).jpg",
      altText: "Struktor Projekat",
      width: 1600,
      height: 1200,
    },
    {
      image: "/projekti/images (11).jpg",
      altText: "Struktor Projekat",
      width: 1600,
      height: 1200,
    },
    {
      image: "/projekti/images (12).jpg",
      altText: "Struktor Projekat",
      width: 1600,
      height: 1200,
    },
    {
      image: "/projekti/images (13).jpg",
      altText: "Struktor Projekat",
      width: 623,
      height: 830,
    },
    {
      image: "/projekti/images (14).jpg",
      altText: "Struktor Projekat",
      width: 1600,
      height: 1200,
    },
    {
      image: "/projekti/images (15).jpg",
      altText: "Struktor Projekat",
      width: 1600,
      height: 1200,
    },
    {
      image: "/projekti/images (16).jpg",
      altText: "Struktor Projekat",
      width: 623,
      height: 830,
    },
    {
      image: "/projekti/images (17).jpg",
      altText: "Struktor Projekat",
      width: 1590,
      height: 1600,
    },
    {
      image: "/projekti/images (18).jpg",
      altText: "Struktor Projekat",
      width: 1200,
      height: 1600,
    },
    {
      image: "/projekti/images (19).jpg",
      altText: "Struktor Projekat",
      width: 1600,
      height: 1404,
    },
    {
      image: "/projekti/images (20).jpg",
      altText: "Struktor Projekat",
      width: 1600,
      height: 1200,
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

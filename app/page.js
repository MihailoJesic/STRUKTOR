import Image from "next/image";
import styles from "./page.module.css";
import headerImg from "../public/placeholder.jpg";
import bazaImg from "../public/baza.jpg";
import Card from "../components/card.js";

export default function Home() {
  const cardData = [
    {
      title: "Betonska Baza",
      text: "Proizvodnja betona marke MB20, MB25, MB30, sa i bez plastifikatora",
      image: "/baza.jpg",
      altText: "Betonska baza",
      buttonText: "Detalji",
      link: "/usluge",
    },
    {
      title: "Betonska Baza",
      text: "Proizvodnja betona marke MB20, MB25, MB30, sa i bez plastifikatora",
      image: "/kamion.jpg",
      altText: "Betonska baza",
      buttonText: "Detalji",
      link: "/usluge",
    },
    {
      title: "Betonska Baza",
      text: "Proizvodnja betona marke MB20, MB25, MB30, sa i bez plastifikatora",
      image: "/radnici.jpeg",
      altText: "Betonska baza",
      buttonText: "Detalji",
      link: "/usluge",
    },
  ];

  function cardCollection(arr) {
    const output = [];
    arr.forEach((el) => {
      output.push(<Card data={el} />);
    });
    return output;
  }

  return (
    <main>
      <section className={styles.headerContiner}>
        <Image
          src={headerImg}
          className={styles.headerImg}
          alt="Struktor Logo"
          sizes="100%"
        />{" "}
        <h1 className={styles.headerText}>Struktor Ješić</h1>
      </section>
      <section className={styles.cardContainer}>
        {cardCollection(cardData)}
      </section>
      <section className={styles.mapContainer}>
        <div className="mapResponsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.3958287699315!2d20.04118077510154!3d43.82688997109442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47577f3d8aa8d7d1%3A0x937eef1444368209!2zU3RydWt0b3IgSmXFoWnEjQ!5e0!3m2!1sen!2srs!4v1686142917261!5m2!1sen!2srs"
            styles="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import headerImg from "../public/homepage/header.jpg";
import Card from "../components/card.js";
import Button from "../components/button.js";

export default function Home() {
  const cardData = [
    {
      title: "Usluge",
      text: "Priprema i raščišćavanje gradilišta, administraticna delatnost, zemljani, grubi građevinski, armirački i drugi radovi... ",
      image: "/homepage/usluge-transport-1.jpg",
      altText: "Šest parkiranih kamioni",
      buttonText: "Detalji",
      link: "/usluge",
      width: 1600,
      height: 1200,
    },
    {
      title: "Betonska Baza",
      text: "Proizvodnja betona marke MB15, MB20, MB25, MB30, MB35, MB40.",
      image: "/homepage/betonska-baza-1.jpg",
      altText: "Betonska baza",
      buttonText: "Detalji",
      link: "/usluge#baza",
      width: 1200,
      height: 900,
    },
    {
      title: "Projekti",
      text: "Stambeni i nestambeni objekti.",
      image: "/homepage/projekti-1.jpg",
      altText: "Tojo Centar u Požegi",
      buttonText: "Detalji",
      link: "/projekti",
      width: 1600,
      height: 1200,
    },
    {
      title: "O nama",
      text: "Kompanija ”STRUKTOR JEŠIĆ” D.O.O. tri decenije uspešno posluje u oblasti građevinske infrastrukture.",
      image: "/homepage/o-nama-2.jpg",
      altText: "Radovi na tunelu Titan Cementara Kosijerić",
      buttonText: "Detalji",
      link: "/o_nama",
      width: 800,
      height: 600,
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
        <div className={styles.mapSidebar}>
          <h3 className={styles.contact}>Lokacije</h3>
          <div>
            Betonska baza nalazi se na Godovičkom Putu
            <br />
            Kancelarije na drugon spratu biznis centra u Francuskoj br. 1
          </div>
          <div className={styles.ContactButtonContainer}>
            <Button
              buttonText="Kancelarija"
              link="/kontakt#kanzelarija"
            ></Button>
            <Button buttonText="Betonska Baza" link="/kontakt#baza"></Button>
          </div>
        </div>
        <div className="mapResponsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.3958287699315!2d20.04118077510154!3d43.82688997109442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47577f3d8aa8d7d1%3A0x937eef1444368209!2zU3RydWt0b3IgSmXFoWnEjQ!5e0!3m2!1sen!2srs!4v1686142917261!5m2!1sen!2srs"
            styles="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="title">Kontaktne Informacije</h1>
      <section className={styles.locationContainer} id="kancelarija">
        <div className={styles.textContainer}>
          <h3 className={styles.contactPlace}>Kancelarija:</h3>
          <a
            className={styles.offset}
            href="https://goo.gl/maps/2dAo958ro8GGewjv5"
          >
            Francuska 1, II sprat, 31210 Požega
          </a>
          <h3>Telefon:</h3>
          <ul className={styles.offset}>
            <li>
              {" "}
              <a href="tel:+381607151555">Tel.: 060/715-15-55</a>
            </li>{" "}
            <li>
              {" "}
              <a href="tel:+381607151551">Tel.: 060/715-15-51</a>
            </li>{" "}
            <li>
              {" "}
              <a href="tel:+381607151551">Tel.: 060/715-15-99</a>
            </li>{" "}
          </ul>{" "}
        </div>
        <div className="mapResponsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1438.8008940466734!2d20.034392552422084!3d43.843354104730324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47577f1bb51dd165%3A0xe2777e7b797f06a5!2sBiznis%20centar%20Po%C5%BEega!5e0!3m2!1sen!2srs!4v1686144912484!5m2!1sen!2srs"
            width="600"
            height="450"
            styles="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section className={styles.locationContainer} id="baza">
        <div className={styles.textContainer}>
          <h3 className={styles.contactPlace}> Betonska Baza:</h3>
          <a
            className={styles.offset}
            href="https://goo.gl/maps/HyxMYUgTsTJRPqjF8"
          >
            Godovički put
          </a>
          <h3>Telefon:</h3>
          <ul className={styles.offset}>
            <li>
              {" "}
              <a href="tel:+381607151552">Tel.: 060/715-15-52</a>
            </li>{" "}
            <li>
              {" "}
              <a href="tel:+381607151550">Tel.: 060/715-15-50</a>
            </li>
          </ul>{" "}
        </div>
        <div className="mapResponsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.3958287699315!2d20.04118077510154!3d43.82688997109442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47577f3d8aa8d7d1%3A0x937eef1444368209!2zU3RydWt0b3IgSmXFoWnEjQ!5e0!3m2!1sen!2srs!4v1686144960178!5m2!1sen!2srs"
            width="600"
            height="450"
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

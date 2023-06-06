import Image from "next/image";
import styles from "./page.module.css";
import headerImg from "../public/placeholder.jpg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.headerContiner}>
        <Image
          src={headerImg}
          className={styles.headerImg}
          alt="Struktor Logo"
          sizes="25vw"
        />{" "}
        <h1 className={styles.headerText}>Glavna Strana</h1>
      </div>
      <div className={styles.googleMaps}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.601788093347!2d20.03383760209407!3d43.843354104730324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47577f1bb51dd165%3A0xe2777e7b797f06a5!2sBiznis%20centar%20Po%C5%BEega!5e0!3m2!1sen!2srs!4v1685978357616!5m2!1sen!2srs"
          width="400"
          height="300"
          styles="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}

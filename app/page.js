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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1438.8008940466734!2d20.034741368025845!3d43.843354104730324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47577f1bb51dd165%3A0xe2777e7b797f06a5!2sBiznis%20centar%20Po%C5%BEega!5e0!3m2!1sen!2srs!4v1685972283875!5m2!1sen!2srs"
        width="300"
        height="225"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
}

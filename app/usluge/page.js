import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="title">Usluge</h1>
      <div className={styles.contentContainer}>
        <section className={styles.serviceContainer}>
          <div className={styles.textContainer}>
            <ul className={styles.serviceList}>
              <li className={styles.serviceItem}>
                Radovi na pripremi i raščišćavanju gradilišta
                <ul>
                  <li className={styles.serviceSubItem}>
                    Rušenje postojećih objekata
                  </li>
                  <li className={styles.serviceSubItem}>
                    Izrada pristupnih saobraćajnica
                  </li>
                </ul>
              </li>

              <li className={styles.serviceItem}>
                Zemljani Radovi
                <ul>
                  {" "}
                  <li className={styles.serviceSubItem}>
                    Mašinski iskop materijala uz odvoz na deponiju
                  </li>
                  <li className={styles.serviceSubItem}>
                    Nabavka, transport i ugradnja kamenog agregata
                  </li>
                </ul>
              </li>

              <li className={styles.serviceItem}>
                Grubi građevinski radovi
                <ul>
                  <li className={styles.serviceSubItem}>
                    Izrada betonskih i čeličnih konstrukcija kako stambenih tako
                    i industrijskih objekata
                  </li>
                  <li className={styles.serviceSubItem}>
                    Izrada podnih ploča uz završnu obradu
                    &rdquo;fero-betonom&rdquo;
                  </li>
                </ul>
              </li>
              <li className={styles.serviceItem}>Armirački radovi</li>
              <li className={styles.serviceItem}>Zidarski radovi</li>
              <li className={styles.serviceItem}>
                Tesarski i pokrivački radovi{" "}
              </li>
              <li className={styles.serviceItem}>
                Administrativna delatnost
                <ul>
                  <li className={styles.serviceSubItem}>
                    Obrada projektne dokumentacije
                  </li>
                  <li className={styles.serviceSubItem}>
                    Izrada dokumentacije za centralnu evidenciju objedinjene
                    procedure CEOP
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <a
            className={styles.imageLink}
            href="/usluge/usluge-1.jpg"
            target="_blank"
          >
            <img
              src="/usluge/usluge-1.jpg"
              className={styles.sidePhoto}
              alt="x"
              sizes="100%"
              width="600"
              height="450"
            />{" "}
          </a>
        </section>

        <section className={styles.serviceContainer2}>
          <div className={styles.textContainer2}>
            <h3 className={styles.serviceTitle}>Betonska baza:</h3>
            <div
              className={(styles.serviceItem, styles.concreteDetails)}
              id="baza"
            >
              Oblast poslovanja kompanije obuhvata prodaju i isporuku sveže
              betonske mešavine marke MB15, MB20, MB25, MB30, MB35, MB40.
              Unapređenjem tehnologije proizvodnje u ponudi su i betonske
              mešavine sa dodatkom aditiva kojima se poboljšavaju primarne
              karakteristike betona. Transport betonske mešavine vrši se
              kamionima sa mešalicom za beton. Osim kamiona miksera u sastavu
              svog voznog parka kompanija poseduje tri mikser pumpe, sa opsegom
              rada 24, 28 i 40m. Primenom mikser pumpi savladava se
              nepristupačan pristup gradilištu i omogućava ugradnja betona na
              spratnim etažama.
            </div>
          </div>
          <div className={styles.imageContainer}>
            <a
              className={styles.imageLink}
              href="/usluge/kamioni-1.jpg"
              target="_blank"
            >
              <img
                src="/usluge/kamioni-1.jpg"
                className={styles.sidePhoto}
                alt="x"
                sizes="100%"
                width="1200"
                height="900"
              />{" "}
            </a>{" "}
            <a
              className={styles.imageLink}
              href="/usluge/betonska-baza-3.jpg"
              target="_blank"
            >
              <img
                src="/usluge/betonska-baza-3.jpg"
                className={styles.sidePhoto}
                alt="x"
                sizes="100%"
                width="1200"
                height="900"
              />{" "}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

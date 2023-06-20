import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="title">O nama</h1>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            Kompanija &rdquo;STRUKTOR JEŠIĆ&rdquo; D.O.O. tri decenije uspešno
            posluje u oblasti građevinske infrastrukture. Od 1993. godine u
            kontinuitetu radi se na razvoju delatnosti, izradi kompleksnih
            projekata, stambenih i industrijskih celina.{" "}
          </p>
          <p className={styles.text}>
            Primarna delatnost firme obuhvata kvalitetno i odgovorno izvođenje
            građevinskih radova uz upotrebu atestiranih sirovina i uz nadzor
            stručnog kadra.
          </p>
          <p className={styles.text}>
            Na osnovu zahteva tržišta, u saradnji sa laboratorijom za
            ispitivanje betona u opseg svog poslovanja uvrstili smo proizvodnju
            sveže betonske mešavine, sa transportom i isporukom na teritoriji
            Zlatiborskog okruga.
          </p>
          <p className={styles.text}>
            Stručni kadar čine građevinski inženjeri i kvalifikovani građevinski
            radnici koji organizovani u timove sprovode najkompleksnije projekte
            od zemljanih do završnih radova.
          </p>
          <p className={styles.text}>
            Kao odgovorni izvođači radova, svoje projekte u celini sprovodimo
            prema važećim odredbama Zakona o planiranju i izgradnji, uz izradu
            neophodne prateće dokumentacije.
          </p>
          <p className={styles.text}>
            Naš cilj je da svojim klijentima realizujemo zahteve na dobar i
            pouzdan način uz garanciju kvaliteta izvedenih radova.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <a
            href="/o nama/o-nama-1.jpg"
            target="_blank"
            className={styles.imageLink}
          >
            <Image
              src="/o nama/o-nama-1.jpg"
              className={styles.image}
              alt="Struktor Offices"
              sizes="100%"
              fill={true}
            />{" "}
          </a>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="title">O nama</h1>
      <div>
        <div>
          <div>
            Kompanija &rdquo;STRUKTOR JEŠIĆ&rdquo; D.O.O. tri decenije uspešno
            posluje u oblasti građevinske infrastrukture. Od 1993. godine u
            kontinuitetu radi se na razvoju delatnosti, izradi kompleksnih
            projekata, stambenih i industrijskih celina.{" "}
          </div>
          <div>
            Primarna delatnost firme obuhvata kvalitetno i odgovorno izvođenje
            građevinskih radova uz upotrebu atestiranih sirovina i uz nadzor
            stručnog kadra.
          </div>
          <div>
            Na osnovu zahteva tržišta, u saradnji sa laboratorijom za
            ispitivanje betona u opseg svog poslovanja uvrstili smo proizvodnju
            sveže betonske mešavine, sa transportom i isporukom na teritoriji
            Zlatiborskog okruga.
          </div>
          <div>
            Stručni kadar čine građevinski inženjeri i kvalifikovani građevinski
            radnici koji organizovani u timove sprovode najkompleksnije projekte
            od zemljanih do završnih radova.
          </div>
          <div>
            Kao odgovorni izvođači radova, svoje projekte u celini sprovodimo
            prema važećim odredbama Zakona o planiranju i izgradnji, uz izradu
            neophodne prateće dokumentacije.
          </div>
          <div>
            Naš cilj je da svojim klijentima realizujemo zahteve na dobar i
            pouzdan način uz garanciju kvaliteta izvedenih radova.
          </div>
        </div>
      </div>
    </main>
  );
}

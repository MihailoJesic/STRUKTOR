import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import layout from "./layout.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Struktor Ješić",
  description: "Struktor D.O.O.",
};

export default function RootLayout({ children }) {
  const navList = [
    [`Glavna Strana`, `/`],
    [`O Nama`, `/o_nama`],
    [`Usluge`, `/usluge`],
    [`Projekti`, `/projekti`],
    [`Kontakt`, `/kontakt`],
  ];

  function generateList(list) {
    let output = [];

    list.forEach((el) => {
      output.push(
        <li>
          <Link href={`${el[1]}`} className={layout.navLink}>
            {el[0]}
          </Link>
        </li>
      );
    });

    return output;
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={layout.navBar}>
          <nav className={layout.logoContainer}>
            <img
              src="/Struktor Logo.png"
              className={layout.logo}
              alt="Struktor Logo"
              sizes="100%"
              width="1186"
              height="1178"
            />
            <span className={layout.struktor}>
              Struktor Ješić
              <br />
              d.o.o.
            </span>
          </nav>
          <ul className={layout.navList}>{generateList(navList)}</ul>
        </header>
        {children}
        <footer className={layout.contact}>
          <ul className={layout.contactList}>
            <li>
              {" "}
              <a
                className={layout.contactDetail}
                href="https://goo.gl/maps/2dAo958ro8GGewjv5"
              >
                Kancelarija: Francuska 1, 31210 Požega
              </a>
            </li>
            <li>
              {" "}
              <a
                className={layout.contactDetail}
                href="https://goo.gl/maps/HyxMYUgTsTJRPqjF8"
              >
                Betonska Baza: Godovički put
              </a>
            </li>
            <li>
              {" "}
              <a
                className={layout.contactDetail}
                href="http://struktorjesic.com/"
              >
                struktorjesic.com
              </a>
            </li>
          </ul>{" "}
          <ul className={layout.contactList}>
            <li>
              {" "}
              <a className={layout.contactDetail} href="tel:+381607151555">
                060/715-15-55
              </a>
            </li>{" "}
            <li>
              {" "}
              <a className={layout.contactDetail} href="tel:+381607151552">
                060/715-15-52
              </a>
            </li>{" "}
            <li>
              {" "}
              <a className={layout.contactDetail} href="tel:+381607151551">
                060/715-15-51
              </a>
            </li>{" "}
            <li>
              {" "}
              <a className={layout.contactDetail} href="tel:+381607151550">
                060/715-15-50
              </a>
            </li>
          </ul>{" "}
          <ul className={layout.contactList}>
            <li>
              {" "}
              <a
                className={layout.contactDetail}
                href="mailto: nada.jesic@struktor.com"
              >
                nada.jesic@struktor.com
              </a>
            </li>
            <li>
              {" "}
              <a
                className={layout.contactDetail}
                href="mailto: milica.simovic@structorjesic.com"
              >
                milica.simovic@structorjesic.com
              </a>
            </li>{" "}
            <li>
              {" "}
              <a
                className={layout.contactDetail}
                href="mailto: radenko.jesic@struktorjesic.com"
              >
                radenko.jesic@struktorjesic.com
              </a>
            </li>{" "}
            <li>
              {" "}
              <a
                className={layout.contactDetail}
                href="mailto: nikola.cicvaric@struktorjesic.com"
              >
                nikola.cicvaric@struktorjesic.com
              </a>
            </li>{" "}
          </ul>{" "}
        </footer>
      </body>
    </html>
  );
}

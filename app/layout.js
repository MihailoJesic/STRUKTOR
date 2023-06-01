import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import layout from "./layout.module.css";
import logo from "../public/Struktor Logo.png";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Struktor Jesuc",
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
        <nav className={layout.navBar}>
          <div className={layout.logoContainer}>
            <Image
              src={logo}
              className={layout.logo}
              alt="Struktor Logo"
              sizes="25vw"
            />
            <span className={layout.struktor}>
              STRUKTOR JEŠIĆ
              <br />
              D.O.O.
            </span>
          </div>
          <div className={layout.navLinkContainer}>
            <ul className={layout.navList}>{generateList(navList)}</ul>
          </div>
        </nav>
        {children}
        <div className={layout.contact}>
          <ul className={layout.contactList}>
            <li>Telefon 1: xxx/xxxx-xxx</li>
            <li>Telefon 2: xxx/xxxx-xxx</li>
          </ul>{" "}
          <ul className={layout.contactList}>
            <li>Adressa 1: Ulica XYZ</li>
            <li>Adressa 2: Ulica XYZ</li>
          </ul>{" "}
          <ul className={layout.contactList}>
            <li>Site 1: example.com</li>
            <li>Site 2: example.com</li>
          </ul>
        </div>
      </body>
    </html>
  );
}

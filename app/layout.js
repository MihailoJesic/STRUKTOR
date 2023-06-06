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
          <ul className={layout.navList}>{generateList(navList)}</ul>
        </nav>
        {children}
        <div className={layout.contact}>
          <ul className={layout.contactList}>
            <li className={layout.contactDetail}>Tel.: 060/715-15-50</li>
            <li className={layout.contactDetail}>Telefon 2: xxx/xxxx-xxx</li>
            <li className={layout.contactDetail}>Telefon 3: xxx/xxxx-xxx</li>
          </ul>{" "}
          <ul className={layout.contactList}>
            <li className={layout.contactDetail}>Francuska 1, 31210 Požega</li>
            <li className={layout.contactDetail}>Adressa 2: Ulica XYZ</li>
            <li className={layout.contactDetail}>Site 1: Struktor.com</li>
          </ul>{" "}
        </div>
      </body>
    </html>
  );
}

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import layout from "./layout.module.css";
import logo from "../public/Struktor Jesic.png";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Struktor Jesuc",
  description: "Struktor D.O.O.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div className={layout.logoContainer}>
            <Image src={logo} alt="Struktor Logo" sizes="25vw" />
          </div>
          <div>
            <ul>
              <li>
                <Link href={`#`} className={layout.navLink}>
                  glavna strana
                </Link>
              </li>{" "}
              <li>
                <Link href={`#`} className={layout.navLink}>
                  o nama
                </Link>
              </li>{" "}
              <li>
                <Link href={`#`} className={layout.navLink}>
                  usluge
                </Link>
              </li>{" "}
              <li>
                <Link href={`#`} className={layout.navLink}>
                  projekti
                </Link>
              </li>{" "}
              <li>
                <Link href={`#`} className={layout.navLink}>
                  kontakt
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {children}
        <nav>
          <h1>Goodbye Site</h1>
        </nav>
      </body>
    </html>
  );
}

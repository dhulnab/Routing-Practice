import styles from "./Header.module.css";
import Container from "../Container/Container";
import Link from "next/link";

const Header = ({ page = "HOME" }) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <h2>Aon 2023</h2>
          <ul>
            <li className={page === "HOME" ? styles.active : ""}>
              <Link className={styles.link} href={"/"}>
                Home
              </Link>
            </li>
            <li className={page === "ABOUT" ? styles.active : ""}>
              <Link className={styles.link} href={"/about"}>
                About
              </Link>
            </li>
            <li className={page === "HELP" ? styles.active : ""}>
              <Link className={styles.link} href={"/help"}>
                Help
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;

import styles from "./Header.module.css";
import Container from "../Container/Container";
import Link from "next/link";

const Header = () => {
  return <header className={styles.header}>
    <Container>
        <div className={styles.content}>
            <h2>Aon 2023</h2>
            <ul>
                <li>
                    <Link className={styles.link} href={"/"}>Home</Link>
                </li>
                <li>
                    <Link className={styles.link} href={"/"}>About</Link>
                </li>
                <li>
                    <Link className={styles.link} href={"/"}>Help</Link>
                </li>
            </ul>
        </div>
    </Container>
  </header>;
};

export default Header;

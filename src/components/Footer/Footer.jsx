import styles from "./Footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaSquareTwitter } from "react-icons/fa6";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className={styles.footerBox}>
      <Container>
        <div className={styles.footer}>
          <div className={styles.text}>All Rights Reserved - Aon2023</div>
          <div className={styles.icons}>
            <a href="https://web.facebook.com/Dhulfiqar.ali.56" target="_blank">
              <FaFacebookSquare className={styles.icon} />
            </a>
            <a href="#" target="_blank">
              <FaSquareTwitter className={styles.icon} />
            </a>
            <a href="https://www.instagram.com/f18__b/" target="_blank">
              <TiSocialInstagram className={styles.icon} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Container from "@/components/Container/Container";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import Footer from "@/components/Footer/Footer";

export const metadata = {
    title: "Help",
    description:
      "Explore a vast repository of knowledge with over 1000 meticulously curated blogs and articles, covering a spectrum of topics to satiate your intellectual curiosity and keep you informed on the latest trends and insights.Immerse yourself in a treasure trove of information on our website, boasting an extensive collection of over 1000 blogs and articles. Whether you're seeking expert advice, in-depth analysis, or simply looking to stay updated, our diverse content caters to every reader's interests.",
    icons: {
      icon: ["/favicon.ico?v=4"],
      apple: ["/apple-touch-icon.png?v=4"],
      shortcut: ["/apple-touch-icon.png"],
    },
  };

const page = () => {
  return (
    <>
      <div className={styles.header}>
        <Header page="HELP"/>
      </div>
      <Container>
        <div className={styles.img}>
          <Image src="/help.svg" fill alt="error" />
        </div>
        <div className={styles.content}>
          <h2>Help</h2>
          <div>
            Seeking assistance? Visit our Help page for personalized support and
            get in touch with our dedicated team to address any queries or
            concerns you may have.
            <br />
            Discover the support you need on our Help page. From account
            assistance to navigating our platform, we're here to ensure you have
            a smooth and enjoyable experience.
          </div>
          <h3>Contact Us.</h3>
          <h5>Send us a message and we will answer it as soon as possible :</h5>
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
      <Footer />
    </>
  );
};

export default page;

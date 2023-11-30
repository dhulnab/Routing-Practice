import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Container from "@/components/Container/Container";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "About",
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
        <Header page="ABOUT"/>
      </div>
      <Container>
        <div className={styles.content}>
          <h3>Welcome to Aon Blogs</h3>
          <div className={styles.subcontent}>
            At Aon, we believe in the power of knowledge, the joy of
            exploration, and the beauty of sharing ideas. Our platform is a
            digital haven for enthusiasts, learners, and curious minds seeking a
            diverse range of insights, expertise, and inspiration.
          </div>
          <div className={styles.img}>
            <Image src="/about.svg" fill alt="error" />
          </div>
          <h3>Who We Are</h3>
          <div className={styles.subcontent}>
            We are a passionate community of writers, thinkers, and creators
            united by our commitment to providing quality content that enriches
            and engages. Our team consists of experts from various fields, each
            dedicated to sharing their knowledge and experiences with the world.
          </div>
          <div className={styles.img}>
            <Image src="/about2.svg" fill alt="error" />
          </div>
          <h3>What Sets Us Apart</h3>
          <div className={styles.subcontent}>
            With over 1000 articles and blogs in our archive, we take pride in
            our commitment to diversity. Our content spans a wide array of
            topics, from technology and science to lifestyle and culture. We
            believe that by embracing diverse perspectives, we can foster a
            richer understanding of the world.
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default page;

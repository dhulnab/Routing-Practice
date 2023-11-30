import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Cover from "@/components/Cover/Cover";
import Card from "@/components/Card/Card";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Aon Blogs",
  description:
    "Explore a vast repository of knowledge with over 1000 meticulously curated blogs and articles, covering a spectrum of topics to satiate your intellectual curiosity and keep you informed on the latest trends and insights.Immerse yourself in a treasure trove of information on our website, boasting an extensive collection of over 1000 blogs and articles. Whether you're seeking expert advice, in-depth analysis, or simply looking to stay updated, our diverse content caters to every reader's interests.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <Header />
      </div>
      <main className={styles.main}>
        <div className={styles.up}>
          <Cover />
          <div className={styles.down}>
            <Card />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Cover from "@/components/Cover/Cover";
import Card from "@/components/Card/Card";
import Footer from "@/components/Footer/Footer";

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

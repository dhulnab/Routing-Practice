import Card from "../Card/Card";
import Container from "../Container/Container";
import Space from "../Space/Space";
import styles from "./Cover.module.css";

const Cover = () => {
  return (
    <div>
      <div className={styles.coverBox}>
        <main className={styles.cover}></main>
        <div className={styles.title}>
          <Container>
            <h1>Simple Blog.</h1>
            <p className={styles.pTitle}>A blog created by Aon 2023</p>
          </Container>
            {/* <Card/> */}
        </div>
      </div>
    </div>
  );
};

export default Cover;

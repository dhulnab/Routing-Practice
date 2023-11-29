import Container from "../Container/Container";
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
        </div>
      </div>
    </div>
  );
};

export default Cover;

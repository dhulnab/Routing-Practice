"use client";
import Link from "next/link";
import styles from "./Card.module.css";
import Container from "../Container/Container";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Image from "next/image";

const Card = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = () => {
    fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts`).then(
      (res) => res.json().then((data) => setBlogs(data.blogs))
    );
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(blogs);
  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <span className={styles.loader}></span>
        </div>
      ) : null}
      <Container>
        <div className={styles.grid}>
          {blogs.map((blog) => (
            <div key={blog.id} className={styles.card}>
              <div className={styles.img}>
                <Image
                  src={blog.photo_url}
                  className={styles.subImg}
                  fill
                  alt="img error"
                />
              </div>
              <div className={styles.head}>
                <h2>{blog.title}</h2>
                <p className={styles.p}>{blog.category}</p>
              </div>
              <div className={styles.footer}>
                <Link className={styles.link} href={`/article/${blog.id}`}>
                  Read Article
                </Link>
                <span>{dayjs(blog.created_at).format("MMMM DD, YYYY")}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Card;

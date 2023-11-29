"use client";
import Link from "next/link";
import styles from "./Card.module.css";
import Container from "../Container/Container";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import Image from "next/image";
import InfiniteScroll from "react-infinite-scroll-component";

const Card = () => {
  const [offset, setOffset] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = () => {
    fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts?offset=${offset}&limit=12`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs([...blogs, ...data.blogs]);
        setLoading(false);
      });
  };
  useEffect(() => {
    getData();
  }, [offset]);
  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <span className={styles.loader}></span>
        </div>
      ) : null}
      <Container>
        <InfiniteScroll
          dataLength={blogs.length}
          next={() => setOffset(offset + 12)}
          hasMore={true}
          className="scroll"
        >
          <div className={styles.grid}>
            {blogs.map((blog) => (
              <div key={blog.id} className={styles.card}>
                <div className={styles.img}>
                  <Image
                    src={blog.photo_url}
                    className={styles.subImg}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true} // the image will be loaded as soon as possible, before discovering the HTML form browser...no lazy load
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
        </InfiniteScroll>
      </Container>
    </>
  );
};

export default Card;

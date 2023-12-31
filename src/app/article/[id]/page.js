// pages/page/[id].js
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Container from "@/components/Container/Container";
import dayjs from "dayjs";
import Image from "next/image";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.id;

  // fetch data
  const data = await getData(id);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data.blog.title,
    description: data.blog.description,
    openGraph: {
      images: [data.blog.photo_url, ...previousImages],
    },
  };
}

const Page = async ({ params }) => {
  try {
    const data = await getData(params.id);
    const slicedContent = data.blog.content_text.slice(0, 673);

    return (
      <>
        <div className={styles.header}>
          <Header />
        </div>
        <main className={styles.main}>
          <Container>
            <div className={styles.head}>
              <div>
                <h1>{data.blog.title}</h1>
                <p>{data.blog.category}</p>
              </div>
              <span>{dayjs(data.blog.created_at).format("MMMM DD, YYYY")}</span>
            </div>
            <div className={styles.cover}>
              <Image
                src={data.blog.photo_url}
                className={styles.img}
                alt="error"
                fill
              />
            </div>
            <span
              className={styles.txt}
              dangerouslySetInnerHTML={{ __html: slicedContent }}
            ></span>
            <span>...</span>
            <br />
            <div className={styles.dots}>. . . . . . .</div>
            <br />
            <div
              dangerouslySetInnerHTML={{ __html: data.blog.content_html }}
            ></div>
          </Container>
          <Footer />
        </main>
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return (
      <main className={styles.main}>
        <Header />
        <Container>
          <div>Error fetching data</div>
        </Container>
        <Footer />
      </main>
    );
  }
};

export default Page;

async function getData(id) {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

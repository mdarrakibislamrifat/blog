import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Rifat is here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="p1" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            iste!
          </h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
            eius necessitatibus. Voluptatem molestias asperiores commodi, nulla
            temporibus, quam animi voluptatibus non eligendi ducimus architecto
            qui sint! Fugit vero iure veniam!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

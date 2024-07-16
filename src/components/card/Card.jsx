import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="p1" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2024 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
          eveniet odit enim in ipsa odio tenetur ullam maiores. Molestias,
          assumenda voluptas? Voluptates neque ut perspiciatis et aut nam quam
          sint?
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

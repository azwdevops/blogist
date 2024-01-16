import Image from "next/image";
import styles from "./featured.module.css";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <strong>Welcome to Blogist </strong>
        <span>Discover and share creative and inspiring ideas </span>
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            If you believe you can, then you will
          </h1>
          <p className={styles.postDescription}>
            It's about believing and pursuing what you believe. No matter how
            many challenges and setbacks you face, you just have to keep pushing
            forward past the pain...
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

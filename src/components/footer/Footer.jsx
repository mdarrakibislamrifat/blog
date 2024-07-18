import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Rifat blog" width={50} height={50} />
          <h1 className={styles.logoText}>rifatblog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quia
          omnis cumque ex blanditiis consequatur esse in fuga minus tempore,
          quis suscipit dicta nulla totam doloremque officia provident, corporis
          repudiandae?
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" height={18} width={18} />
          <Image src="/instagram.png" alt="" height={18} width={18} />
          <Image src="/youtube.png" alt="" height={18} width={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

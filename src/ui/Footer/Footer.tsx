import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className="px-1.5 pt-1.5 mx-auto">
      <div className={styles.footer}>
        <Image src="/ruble-gray.svg" alt="рубль" width={30} height={30} />
      </div>
    </footer>
  );
}

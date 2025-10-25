import Link from "next/link";
import styles from "./Buttons.module.css";

export default function Buttons() {
  return (
    <section className="px-1.5 pt-1.5 mx-auto mb-2.5">
      <div className={styles.wrapper}>
        <Link href={"/addexpense"} className={styles["main-btn"]}>
          + Расход
        </Link>
        <button className={styles["secondary-btn"]}>+ Доход</button>
      </div>
    </section>
  );
}

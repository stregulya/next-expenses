import styles from "./Buttons.module.css";

export default function Buttons() {
  return (
    <section className="px-1.5 pt-1.5 mx-auto mb-2.5">
      <div className={styles.wrapper}>
        <button className={styles["main-btn"]}>+ Расход</button>
        <button className={styles["secondary-btn"]}>+ Доход</button>
      </div>
    </section>
  );
}

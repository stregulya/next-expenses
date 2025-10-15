import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <section className="px-1.5 pt-1.5 mx-auto mb-2.5">
      <h2 className={styles.title}>Статистика</h2>
      <div className={styles.stats}>
        <ul className={styles.list}>
          <li className={styles["list-item"]}>
            <div className="flex items-center gap-1.5">
              <div className={styles["progress-wrapper"]}>
                <div className={`${styles.progress} w-[50%]`}></div>
              </div>
              <span>50%</span>
            </div>

            <span className="text-right">Транспорт</span>
          </li>

          <li className={styles["list-item"]}>
            <div className="flex items-center gap-1.5">
              <div className={styles["progress-wrapper"]}>
                <div className={`${styles.progress} w-[30%]`}></div>
              </div>
              <span>30%</span>
            </div>
            <span className="text-right">Еда</span>
          </li>

          <li className={styles["list-item"]}>
            <div className="flex items-center gap-1.5">
              <div className={styles["progress-wrapper"]}>
                <div className={`${styles.progress} w-[20%]`}></div>
              </div>
              <span>20%</span>
            </div>
            <span className="text-right">Покупки</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

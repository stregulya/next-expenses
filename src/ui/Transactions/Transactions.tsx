import Image from "next/image";
import styles from "./Transactions.module.css";

export default function Transactions() {
  return (
    <section className="px-1.5 pt-1.5 mx-auto mb-2.5">
      <h2 className={styles.title}>Последние транзакции</h2>
      <div className={styles.transactions}>
        <ul className={styles.list}>
          <li className={styles["list-item"]}>
            <div className={styles["list-item_title-container"]}>
              <Image src={"burger.svg"} alt="Бургер" width={30} height={30} />
              <h3>Еда</h3>
            </div>
            <span className={styles.amount}>-450 Р</span>
          </li>

          <li className={styles["list-item"]}>
            <div className={styles["list-item_title-container"]}>
              <Image
                src={"transport.svg"}
                alt="Транспорт"
                width={30}
                height={30}
              />
              <h3>Транспорт</h3>
            </div>
            <span className={styles.amount}>-120 Р</span>
          </li>

          <li className={styles["list-item"]}>
            <div className={styles["list-item_title-container"]}>
              <Image src={"salary.svg"} alt="Зарплата" width={30} height={30} />
              <h3>Зарплата</h3>
            </div>
            <span className={styles["amount-plus"]}>+40000 Р</span>
          </li>

          <li className={styles["list-item"]}>
            <div className={styles["list-item_title-container"]}>
              <Image
                src={"purchases.svg"}
                alt="Покупки"
                width={30}
                height={30}
              />
              <h3>Покупки</h3>
            </div>
            <span className={styles.amount}>-1200 Р</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

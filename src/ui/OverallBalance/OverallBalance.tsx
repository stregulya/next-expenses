import styles from "./OverallBalance.module.css";
import Image from "next/image";

export default function OverallBalance() {
  return (
    <section className="px-1.5 pt-1.5 mx-auto mb-2.5">
      <div className={styles.overallbalance}>
        <h2 className={styles.title}>Общий баланс</h2>
        <div className={styles.wrapper}>
          <p className={styles.amount}>+200</p>
          <Image src={"/ruble-white.svg"} alt="Рубль" width={30} height={30} />
        </div>
      </div>
    </section>
  );
}

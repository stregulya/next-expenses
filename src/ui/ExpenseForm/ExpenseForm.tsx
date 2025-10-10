"use client";

import { FormEvent, useEffect, useState } from "react";
import styles from "./ExpenseForm.module.css";

export default function ExpenseForm() {
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const amount = localStorage.getItem("amount");
    if (amount) console.log(`Сумма была: ${amount}`);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("amount", amount);
    setAmount("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Расход</h2>
      <label htmlFor="amount" className={styles["input-title"]}>
        Сумма
      </label>
      <div className={styles["input-wrapper"]}>
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="100"
          className={styles.input}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={styles["main-btn"]}>
        Создать
      </button>
    </form>
  );
}

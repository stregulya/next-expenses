"use client";

import styles from "./ExpenseForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";

interface ExpenseForm {
  amount: number;
  category: string;
  comment: string;
}

export default function ExpenseForm() {
  const { register, handleSubmit, formState, reset } = useForm<ExpenseForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ExpenseForm> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Расход</h2>
      <label htmlFor="amount" className={styles["input-title"]}>
        Сумма
      </label>
      <div className={styles["input-wrapper"]}>
        <input
          type="number"
          min={0}
          step={"any"}
          placeholder="100"
          className={styles.input}
          {...register("amount", {
            required: true,
            valueAsNumber: true,
          })}
        />
      </div>
      <label htmlFor="amount" className={styles["input-title"]}>
        Категория
      </label>
      <div className={styles["select-wrapper"]}>
        <select className={styles.select} {...register("category", {})}>
          <option value="products">Продукты</option>
          <option value="vehicle">Транспорт</option>
          <option value="cloth">Одежда</option>
        </select>
      </div>
      <label htmlFor="amount" className={styles["input-title"]}>
        Комментарий
      </label>
      <div className={styles["textarea-wrapper"]}>
        <textarea
          className={styles.textarea}
          placeholder="Счастье не купишь. Но деньги могут помочь его обрести."
          {...register("comment")}
        ></textarea>
      </div>
      <div className={styles["btn-container"]}>
        <button
          type="submit"
          className={styles["main-btn"]}
          disabled={!formState.isValid}
        >
          Создать
        </button>
        <button className={styles["reset-btn"]} onClick={() => reset()}>
          Очистить
        </button>
      </div>
    </form>
  );
}

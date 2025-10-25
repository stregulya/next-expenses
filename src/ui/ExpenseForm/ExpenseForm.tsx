"use client";

import styles from "./ExpenseForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Link from "next/link";

interface ExpenseForm {
  amount: number;
  category: string;
  comment: string;
}

export default function ExpenseForm() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm<ExpenseForm>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ExpenseForm> = (data) => {
    console.log(data);
    reset();
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Link className={styles["close-btn"]} href={"/"}></Link>
        <h2 className={styles.title}>Расход</h2>

        <label htmlFor="amount" className={styles["input-title"]}>
          Сумма
        </label>
        <div className={styles["input-wrapper"]}>
          <input
            aria-label="amount"
            id="amount"
            type="number"
            min={0}
            step="0.01"
            placeholder="100"
            className={styles.input}
            {...register("amount", {
              required: "Введите сумму",
              valueAsNumber: true,
              min: { value: 0, message: "Сумма должна быть больше 0" },
            })}
          />
        </div>

        <label htmlFor="category" className={styles["input-title"]}>
          Категория
        </label>
        <div className={styles["select-wrapper"]}>
          <select
            aria-label="category"
            id="category"
            className={styles.select}
            {...register("category", { required: "Выберите категорию" })}
          >
            <option value="transport">Транспорт</option>
            <option value="food">Еда</option>
            <option value="purchases">Покупки</option>
          </select>
        </div>

        <label htmlFor="comment" className={styles["input-title"]}>
          Комментарий
        </label>
        <div className={styles["textarea-wrapper"]}>
          <textarea
            aria-label="comment"
            id="comment"
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
          {success && (
            <div className={styles["success-message"]}>
              Расход успешно записан!
            </div>
          )}
          <button
            type="button"
            className={styles["reset-btn"]}
            onClick={() => reset()}
          >
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
}

"use client";

import ExpenseForm from "@/ui/ExpenseForm/ExpenseForm";
import { useState } from "react";

export default function Home() {
  const [formIsActive, setFormIsActive] = useState(true);

  const closeForm = () => {
    setFormIsActive(false);
  };

  return (
    <main className="flex justify-center min-h-screen">
      {formIsActive && <ExpenseForm closeForm={closeForm} />}
      <button onClick={() => setFormIsActive(true)}>Добавить расход</button>
    </main>
  );
}

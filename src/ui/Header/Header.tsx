import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className="px-1.5 pt-1.5 mx-auto sticky top-0 w-full">
      <div className={styles["header"]}>
        <Link href={"/"}>Ex</Link>
      </div>
    </header>
  );
}

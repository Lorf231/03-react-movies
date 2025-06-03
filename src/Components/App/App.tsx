import React from "react";
import styles from "./App.module.css";
import SearchBar from "../../SearchBar/SearchBar";

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Ласкаво просимо до мого додатку!</h1>
      </header>
      <main className={styles.main}>
        <p>Це приклад React-додатку з Module CSS.</p>
      </main>
    </div>
    <SearchBar />
  );
}

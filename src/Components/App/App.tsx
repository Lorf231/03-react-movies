import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import type { Movie } from "../../types/movie";
import { getMovie } from "../../Services/searchMovie";

export default function App() {
  const [movie, setMovie] = useState<Movie[]>([]);

  const handleSearch = async (topic: string) => {
    try {
      const newMovie = await getMovie(topic);
      setMovie(newMovie);
    } catch {
      setMovie([]);
    }
  };

  return (
    <div className={styles.app}>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

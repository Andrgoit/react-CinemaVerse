import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BreadcrumbNavigation, MoviesList, SearchBlock } from "@/components";
import { getMovieByQuery, getMovieGenres } from "@/api";

// import styles from "./SearchPage.module.css";

export default function SearchPage() {
  const [movies, setMovies] = useState({});
  const [genres, setGenres] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  // ------------------------------------------
  const lang = "en-US";
  //---------------------------------------------

  const pageChanger = (page) => {
    setSearchParams({ query, page });
  };

  const inputHandler = (value) => {
    setSearchParams({ query: value, page: 1 });
  };

  useEffect(() => {
    async function fetchMovieGenres() {
      const { data } = await getMovieGenres(lang);
      setGenres(data.genres);
    }
    fetchMovieGenres();
  }, []);

  useEffect(() => {
    if (query.length > 0) {
      async function fetchMovieByQuery() {
        const { data } = await getMovieByQuery(query, page, lang);
        setMovies(data);
      }
      fetchMovieByQuery();
    }
  }, [query, page]);

  return (
    <section>
      <div className="container">
        <SearchBlock query={query} onchange={inputHandler} />
        <BreadcrumbNavigation />
        <MoviesList movies={movies} pageChanger={pageChanger} genres={genres} />
      </div>
    </section>
  );
}

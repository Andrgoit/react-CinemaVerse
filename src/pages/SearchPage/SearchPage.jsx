import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BreadcrumbNavigation, MoviesList, SearchBlock } from "@/components";
import styles from "./SearchPage.module.css";

import { getMovieByQuery } from "@/api";

export default function SearchPage() {
  const [movies, setMovies] = useState({});
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  console.log("query", query);

  // ------------------------------------------
  const lang = "en-US";
  //   const time_window = "day"; //"week
  //   const page = 1;
  //---------------------------------------------

  const pageChanger = (page) => {
    setPage(page);
  };

  const inputHandler = (value) => {
    setSearchParams({ query: value });
  };

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
        <MoviesList movies={movies} pageChanger={pageChanger} />
        SearchPage
      </div>
    </section>
  );
}

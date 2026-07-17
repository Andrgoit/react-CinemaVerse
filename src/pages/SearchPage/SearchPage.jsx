import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import {
  BreadcrumbNavigation,
  MoviesList,
  PaginationComponent,
  SearchBlock,
} from "@/components";

import { getMovieByQuery, getMovieGenres } from "@/api";

export default function SearchPage() {
  const [movies, setMovies] = useState({});
  const [genres, setGenres] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = Number(searchParams.get("page") || 1);
  const lang = String(searchParams.get("lang") || "en");
  const { total_pages } = movies;
  const listRef = useRef(null);

  const pageChanger = (page) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("page", page);
      return params;
    });
  };

  const inputHandler = (value) => {
    setSearchParams({ query: value, page: page, lang: lang });
  };

  useEffect(() => {
    listRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [page]);

  useEffect(() => {
    async function fetchMovieGenres() {
      const { data } = await getMovieGenres(lang);
      setGenres(data.genres);
    }
    fetchMovieGenres();
  }, [lang]);

  useEffect(() => {
    if (query.length > 0) {
      async function fetchMovieByQuery() {
        const { data } = await getMovieByQuery(query, page, lang);
        setMovies(data);
      }
      fetchMovieByQuery();
    }
  }, [query, page, lang]);

  return (
    <section>
      <div className="container flex flex-col gap-8" ref={listRef}>
        <SearchBlock query={query} onchange={inputHandler} />
        <BreadcrumbNavigation />
        <MoviesList movies={movies} genres={genres} />
        <PaginationComponent
          page={page}
          total_pages={total_pages}
          pageChanger={pageChanger}
        />
      </div>
    </section>
  );
}

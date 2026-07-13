import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { BreadcrumbNavigation, MoviesList } from "@/components";

import {
  getTrendingMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
  getSimilarMovies,
  getMovieGenres,
} from "@/api";
import timeWindowTrendingMovies from "@/data/timeWindowTrendingMovies";

export default function ListPage() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const { category, movie_id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");

  // ------------------------------------------
  const lang = "en-US";
  const time_window = timeWindowTrendingMovies.day;
  //---------------------------------------------

  const pageChanger = (page) => {
    setSearchParams({ page });
  };

  useEffect(() => {
    async function fetchMovieGenres() {
      const { data } = await getMovieGenres(lang);
      setGenres(data.genres);
    }
    fetchMovieGenres();
  }, []);

  useEffect(() => {
    const getMovies = async () => {
      switch (category) {
        case "trending-movies":
          try {
            const { data } = await getTrendingMovies(time_window, lang, page);
            setMovies(data);
          } catch (error) {
            console.log("error", error);
          }
          break;
        case "top-rated-movies":
          try {
            const { data } = await getTopRatedMovies(page, lang);
            setMovies(data);
          } catch (error) {
            console.log("error", error);
          }
          break;

        case "now-playing-movies":
          try {
            const { data } = await getNowPlayingMovies(page, lang);
            setMovies(data);
          } catch (error) {
            console.log("error", error);
          }
          break;

        case "upcoming-movies":
          try {
            const { data } = await getUpcomingMovies(page, lang);
            setMovies(data);
          } catch (error) {
            console.log("error", error);
          }
          break;
        default:
          break;
      }
    };
    getMovies();
  }, [category, page, time_window]);

  useEffect(() => {
    const getSameMovies = async () => {
      if (!movie_id) {
        return;
      }
      try {
        const { data } = await getSimilarMovies(movie_id, lang, page);
        setMovies(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getSameMovies();
  }, [movie_id, page]);

  return (
    <div className="container">
      <BreadcrumbNavigation />
      <MoviesList movies={movies} pageChanger={pageChanger} genres={genres} />
    </div>
  );
}

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoviesList, Pagination } from "@/components";

import {
  getTrendingMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
  getSimilarMovies,
} from "@/api";

export default function ListPage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const { category, movie_id } = useParams();

  // ------------------------------------------
  const lang = "en-US";
  const time_window = "day";
  //---------------------------------------------

  console.log("movies", movies);

  useEffect(() => {
    const getMovies = async () => {
      switch (category) {
        case "trending-movies":
          try {
            const { data } = await getTrendingMovies(time_window, lang);
            const { results } = data;
            console.log("results", results);

            setMovies(results);
            // setTotalPages(total_pages);
          } catch (error) {
            console.log("error", error);
          }
          break;
        case "top-rated-movies":
          try {
            const { data } = await getTopRatedMovies(page, lang);
            const { total_pages, results } = data;
            setMovies(results);
            setTotalPages(total_pages);
          } catch (error) {
            console.log("error", error);
          }
          break;

        case "now-playing-movies":
          try {
            const { data } = await getNowPlayingMovies(page, lang);
            const { total_pages, results } = data;
            setMovies(results);
            setTotalPages(total_pages);
          } catch (error) {
            console.log("error", error);
          }
          break;

        case "upcoming-movies":
          try {
            const { data } = await getUpcomingMovies(page, lang);
            const { total_pages, results } = data;
            setMovies(results);
            setTotalPages(total_pages);
          } catch (error) {
            console.log("error", error);
          }
          break;
        default:
          break;
      }
    };
    getMovies();
  }, [category, page]);

  useEffect(() => {
    const getSameMovies = async () => {
      if (!movie_id) {
        return;
      }
      try {
        const { data } = await getSimilarMovies(movie_id, lang, page);
        console.log("data", data);

        const { total_pages, results } = data;
        setMovies(results);
        setTotalPages(total_pages);
      } catch (error) {
        console.log("error", error);
      }
    };
    getSameMovies();
  }, [movie_id, page]);

  return (
    <div>
      <MoviesList movies={movies} />
      {totalPages && <Pagination page={page} totalPages={totalPages} />}
    </div>
  );
}

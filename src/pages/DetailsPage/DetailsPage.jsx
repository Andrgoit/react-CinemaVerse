import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getMovieById,
  getMovieCast,
  getMovieReviews,
  getMovieTrailers,
  getSimilarMovies,
} from "@/api";
import { Section, MovieDetails } from "@/components";

export default function DetailsPage() {
  const [movieDitails, setMovieDitails] = useState(null);
  const [movieCast, setMovieCast] = useState([]);
  const [movieTrailers, setMovieTrailers] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  const { movie_id } = useParams();
  const lang = "en-US";
  const page = 1;

  useEffect(() => {
    async function fetchMovieDitails() {
      const { data } = await getMovieById(movie_id, lang);
      console.log("MovieDitails", data);
      setMovieDitails(data);
    }

    async function fetchMovieCast() {
      const { data } = await getMovieCast(movie_id, lang);
      console.log("MovieCast", data);
      setMovieCast(data.cast);
    }

    async function fetchMovieReviews() {
      const { data } = await getMovieReviews(movie_id, lang, page);
      console.log("MovieReviews", data);
      setMovieReviews(data.results);
    }

    async function fetchMovieTrailers() {
      const { data } = await getMovieTrailers(movie_id, lang);
      console.log("MovieTrailers", data);
      setMovieTrailers(data.results);
    }

    async function fetchSimilarMovies() {
      const { data } = await getSimilarMovies(movie_id, lang, page);
      console.log("SimilarMovies", data);
      setSimilarMovies(data.results);
    }

    fetchMovieDitails();
    fetchMovieCast();
    fetchMovieReviews();
    fetchMovieTrailers();
    fetchSimilarMovies();
  }, [movie_id]);

  return (
    <div>
      <Link to={`/movie/${movie_id}/similar`}>Similar movies</Link>
      {movieDitails && <MovieDetails movieDitails={movieDitails} />}
      {movieTrailers.length > 0 && <Section title="Trailers"></Section>}
      {movieReviews.length > 0 && <Section title="Overviews"></Section>}
      {movieCast.length > 0 && <Section title="Top Cast"></Section>}
      {similarMovies.length > 0 && (
        <Section title="You may also like"></Section>
      )}
    </div>
  );
}

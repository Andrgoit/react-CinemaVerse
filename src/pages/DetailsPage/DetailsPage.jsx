import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getMovieById,
  getMovieCast,
  getMovieReviews,
  getMovieTrailers,
  getSimilarMovies,
  getMovieGenres,
} from "@/api";
import {
  Section,
  MovieDetails,
  SwiperComponent,
  CaseSwiperComponent,
  OverviewsSwiperComponent,
  TrailersSwiperComponent,
} from "@/components";

export default function DetailsPage() {
  const [movieDitails, setMovieDitails] = useState(null);
  const [movieCast, setMovieCast] = useState([]);
  const [movieTrailers, setMovieTrailers] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [genres, setGenres] = useState([]);

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
      setMovieTrailers(data.results.slice(0, 10));
    }

    async function fetchSimilarMovies() {
      const { data } = await getSimilarMovies(movie_id, lang, page);
      console.log("SimilarMovies", data);
      setSimilarMovies(data.results);
    }

    async function fetchMovieGenres() {
      const { data } = await getMovieGenres(lang);
      console.log("Genres", data.genres);
      setGenres(data.genres);
    }

    fetchMovieDitails();
    fetchMovieCast();
    fetchMovieReviews();
    fetchMovieTrailers();
    fetchSimilarMovies();
    fetchMovieGenres();
  }, [movie_id]);

  return (
    <div>
      {movieDitails && (
        <MovieDetails movieDitails={movieDitails} genres={genres} />
      )}
      {movieTrailers.length > 0 && (
        <Section title="Trailers">
          <TrailersSwiperComponent movieTrailers={movieTrailers} />
        </Section>
      )}
      {/* {movieReviews.length > 0 && (
        <Section title="Overviews">
          <OverviewsSwiperComponent movieReviews={movieReviews} />
        </Section>
      )}
      {movieCast.length > 0 && (
        <Section title="Top Cast">
          <CaseSwiperComponent movieCast={movieCast} />
        </Section>
      )}
      {similarMovies.length > 0 && (
        <Section title="You may also like" link={`/movie/${movie_id}/similar`}>
          <SwiperComponent movies={similarMovies} />
        </Section>
      )} */}
    </div>
  );
}

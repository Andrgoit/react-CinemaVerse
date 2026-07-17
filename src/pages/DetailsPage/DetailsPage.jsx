import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  getMovieById,
  // getMovieCast,
  getMovieReviews,
  getMovieTrailers,
  getMovieGenres,
  getSimilarMovies,
} from "@/api";

import {
  Section,
  MovieDetails,
  SwiperComponent,
  // CaseSwiperComponent,
  OverviewsSwiperComponent,
  TrailersSwiperComponent,
  BreadcrumbNavigation,
} from "@/components";

export default function DetailsPage() {
  const [movieDitails, setMovieDitails] = useState(null);
  // const [movieCast, setMovieCast] = useState([]);
  const [movieTrailers, setMovieTrailers] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const { t, i18n } = useTranslation();

  const { movie_id } = useParams();
  const lang = i18n.language;
  const page = 1;

  useEffect(() => {
    async function fetchMovieDitails() {
      const { data } = await getMovieById(movie_id, lang);
      setMovieDitails(data);
    }

    // async function fetchMovieCast() {
    //   const { data } = await getMovieCast(movie_id, lang);
    //   console.log("MovieCast", data);
    //   setMovieCast(data.cast);
    // }

    async function fetchMovieReviews() {
      const { data } = await getMovieReviews(movie_id, lang, page);
      setMovieReviews(data.results);
    }

    async function fetchMovieTrailers() {
      const { data } = await getMovieTrailers(movie_id, lang);
      setMovieTrailers(data.results.slice(0, 10));
    }

    async function fetchSimilarMovies() {
      const { data } = await getSimilarMovies(movie_id, lang, page);
      console.log("SimilarMovies", data);
      setSimilarMovies(data.results);
    }

    async function fetchMovieGenres() {
      const { data } = await getMovieGenres(lang);
      setGenres(data.genres);
    }

    fetchMovieDitails();
    // fetchMovieCast();
    fetchMovieReviews();
    fetchMovieTrailers();
    fetchSimilarMovies();
    fetchMovieGenres();
  }, [lang, movie_id]);

  return (
    <div className="container flex flex-col gap-8">
      <BreadcrumbNavigation />
      {movieDitails && <MovieDetails movieDitails={movieDitails} />}
      {movieTrailers.length > 0 && (
        <Section title={t("section.title.trailers")}>
          <TrailersSwiperComponent movieTrailers={movieTrailers} />
        </Section>
      )}
      {movieReviews.length > 0 && (
        <Section title={t("section.title.overeviews")}>
          <OverviewsSwiperComponent movieReviews={movieReviews} />
        </Section>
      )}
      {/*
      {movieCast.length > 0 && (
        <Section title="Top Cast">
          <CaseSwiperComponent movieCast={movieCast} />
        </Section>
      )}*/}
      {similarMovies.length > 0 && (
        <Section
          title={t("section.title.similar")}
          link={`/movie/${movie_id}/similar?page=1&lang=${lang}`}
        >
          <SwiperComponent movies={similarMovies} genres={genres} />
        </Section>
      )}
    </div>
  );
}

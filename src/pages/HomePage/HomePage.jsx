import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  HeroBanner,
  Section,
  SwiperComponent,
  TopRateSwipeComponent,
  SearchBlock,
} from "@/components";

import categories from "@/data/category";

import {
  getTrendingMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
  getMovieGenres,
} from "@/api";

import timeWindowTrendingMovies from "@/data/timeWindowTrendingMovies";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRateMovies, setTopRateMovies] = useState([]);
  const [upcomingMovies, setUpconingMovies] = useState([]);
  const [playingNowMovies, setPlayingNowMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // console.log("trendingMovies", trendingMovies);
  // console.log("topRateMovies", topRateMovies);
  // console.log("upcomingMovies", upcomingMovies);
  // console.log("playingNowMovies", playingNowMovies);
  // console.log("genres", genres);

  // ------------------------------------------
  const time_window = timeWindowTrendingMovies.day;
  const page = 1;
  //---------------------------------------------

  const inputHandler = (value) => {
    setQuery(value);
  };

  useEffect(() => {
    async function fetchTrendingMovies() {
      const { data } = await getTrendingMovies(time_window, lang);
      setTrendingMovies(data.results.slice(0, 10));
    }

    async function fetchTopRatedMovies() {
      const { data } = await getTopRatedMovies(page, lang);
      setTopRateMovies(data.results.slice(0, 10));
    }

    async function fetchNowPlayingMovies() {
      const { data } = await getNowPlayingMovies(page, lang);
      setPlayingNowMovies(data.results.slice(0, 10));
    }

    async function fetchUpcomingMovies() {
      const { data } = await getUpcomingMovies(page, lang);
      setUpconingMovies(data.results.slice(0, 10));
    }

    async function fetchMovieGenres() {
      const { data } = await getMovieGenres(lang);
      setGenres(data.genres);
    }

    fetchTrendingMovies();
    fetchTopRatedMovies();
    fetchNowPlayingMovies();
    fetchUpcomingMovies();
    fetchMovieGenres();
  }, [lang, time_window]);

  if (query.length > 0) {
    return <Navigate to={`/search?query=${query}&page=1&lang=${lang}`} />;
  }

  return (
    <div className="flex flex-col gap-8">
      <SearchBlock query={query} onchange={inputHandler} />
      <HeroBanner />
      <Section
        title={t("section.title.trending")}
        link={categories.trendMovies}
      >
        <SwiperComponent movies={trendingMovies} genres={genres} />
      </Section>
      <Section
        title={t("section.title.topRated")}
        link={categories.topRateMovies}
      >
        <TopRateSwipeComponent movies={topRateMovies} />
      </Section>
      <Section
        title={t("section.title.upcoming")}
        link={categories.upcomingMovie}
      >
        <SwiperComponent movies={upcomingMovies} genres={genres} />
      </Section>
      <Section
        title={t("section.title.nowPlaying")}
        link={categories.nowPlayingMovies}
      >
        <SwiperComponent movies={playingNowMovies} genres={genres} />
      </Section>
    </div>
  );
}

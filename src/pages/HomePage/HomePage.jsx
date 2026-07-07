import { useEffect, useState } from "react";
import {
  HeroBanner,
  Section,
  SwiperComponent,
  TopRateSwipeComponent,
} from "@/components";

import categories from "@/data/category";

import {
  getTrendingMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
  getMovieGenres,
} from "@/api";

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRateMovies, setTopRateMovies] = useState([]);
  const [upcomingMovies, setUpconingMovies] = useState([]);
  const [playingNowMovies, setPlayingNowMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  // console.log("trendingMovies", trendingMovies);
  console.log("topRateMovies", topRateMovies);
  // console.log("upcomingMovies", upcomingMovies);
  // console.log("playingNowMovies", playingNowMovies);
  // console.log("genres", genres);

  // ------------------------------------------
  const lang = "en-US";
  const time_window = "day";
  const page = 1;
  //---------------------------------------------

  useEffect(() => {
    async function fetchTrendingMovies() {
      const { data } = await getTrendingMovies(time_window, lang);
      setTrendingMovies(data.results);
    }

    async function fetchTopRatedMovies() {
      const { data } = await getTopRatedMovies(page, lang);
      setTopRateMovies(data.results);
    }

    async function fetchNowPlayingMovies() {
      const { data } = await getNowPlayingMovies(page, lang);
      setPlayingNowMovies(data.results);
    }

    async function fetchUpcomingMovies() {
      const { data } = await getUpcomingMovies(page, lang);
      setUpconingMovies(data.results);
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
  }, []);

  return (
    <div>
      <HeroBanner />
      <Section title="Trending Now" link={categories.trendMovies}>
        <SwiperComponent movies={trendingMovies} genres={genres} />
      </Section>
      <Section title="Top Rated" link={categories.topRateMovies}>
        <TopRateSwipeComponent movies={topRateMovies} />
      </Section>
      <Section title="Upcoming" link={categories.upcomingMovie}>
        <SwiperComponent movies={upcomingMovies} genres={genres} />
      </Section>
      <Section title="Playing now" link={categories.nowPlayingMovies}>
        <SwiperComponent movies={playingNowMovies} genres={genres}/>
      </Section>
    </div>
  );
}

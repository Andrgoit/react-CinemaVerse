// https://api.themoviedb.org/3/trending/movie/{time_window}

import axios from "axios";
import baseURLs from "@/data/baseURLs";
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const BASE_URL = baseURLs.apiURL;

async function getTrendingMovies(
  time_window = "day",
  lang = "en-US",
  page = 1,
) {
  const options = {
    params: { language: `${lang}`, page: page },
    headers: {
      accept: "application/json",
      Authorization: `${ACCESS_TOKEN}`,
    },
  };

  try {
    const request = await axios.get(
      `${BASE_URL}/trending/movie/${time_window}`,
      options,
    );
    if (request.status === 200) {
      return request;
    }
    throw new Error();
  } catch (error) {
    console.log("error", error);
  }
}

export default getTrendingMovies;

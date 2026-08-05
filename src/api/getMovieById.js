// https://api.themoviedb.org/3/movie/{movie_id}

import axios from "axios";
import baseURLs from "@/data/baseURLs";
const BASE_URL = baseURLs.apiURL;
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

async function getMovieById(movie_id, lang = "en-US") {
  const options = {
    params: { language: `${lang}` },
    headers: {
      accept: "application/json",
      Authorization: `${ACCESS_TOKEN}`,
    },
  };

  try {
    const request = await axios.get(`${BASE_URL}/movie/${movie_id}`, options);
    if (request.status === 200) {
      return request;
    }
    throw new Error();
  } catch (error) {
    console.log("error", error);
  }
}

export default getMovieById;

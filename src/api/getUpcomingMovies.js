// https://api.themoviedb.org/3/movie/upcoming

import axios from "axios";
import baseURLs from "@/data/baseURLs";
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const BASE_URL = baseURLs.apiURL;

async function getUpcomingMovies(page = "1", lang = "en-US") {
  const options = {
    params: { language: `${lang}`, page: `${page}` },
    headers: {
      accept: "application/json",
      Authorization: `${ACCESS_TOKEN}`,
    },
  };

  try {
    const request = await axios.get(`${BASE_URL}/movie/upcoming`, options);
    if (request.status === 200) {
      return request;
    }
    throw new Error();
  } catch (error) {
    console.log("error", error);
  }
}

export default getUpcomingMovies;

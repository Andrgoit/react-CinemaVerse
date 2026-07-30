// https://api.themoviedb.org/3/search/movie

import axios from "axios";
import baseURLs from "@/data/baseURLs";
const BASE_URL = baseURLs.apiURL;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

async function getMovieByQuery(query = "", page = "1", lang = "en-US") {
  const options = {
    params: {
      query: `${query}`,
      language: `${lang}`,
      page: `${page}`,
      include_adult: "false",
    },
    headers: {
      accept: "application/json",
      Authorization: `${ACCESS_TOKEN}`,
    },
  };

  try {
    const request = await axios.get(`${BASE_URL}/search/movie`, options);
    if (request.status === 200) {
      return request;
    }
    throw new Error();
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}

export default getMovieByQuery;

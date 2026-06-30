// https://api.themoviedb.org/3/search/movie

import axios from "axios";
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
const BASE_URL = import.meta.env.VITE_BASE_URL;

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
  }
}

export default getMovieByQuery;

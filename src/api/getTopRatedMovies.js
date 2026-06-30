// https://api.themoviedb.org/3/movie/top_rated

import axios from "axios";
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
const BASE_URL = import.meta.env.VITE_BASE_URL;

async function getTopRatedMovies(page = "1", lang = "en-US") {
  const options = {
    params: { language: `${lang}`, page: `${page}` },
    headers: {
      accept: "application/json",
      Authorization: `${ACCESS_TOKEN}`,
    },
  };

  try {
    const request = await axios.get(`${BASE_URL}/movie/top_rated`, options);
    if (request.status === 200) {
      return request;
    }
    throw new Error();
  } catch (error) {
    console.log("error", error);
  }
}

export default getTopRatedMovies;

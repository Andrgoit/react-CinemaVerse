import getTrendingMovies from "@/api/getTrendingMovies";
import getTopRatedMovies from "@/api/getTopRatedMovies";
import getNowPlayingMovies from "@/api/getNowPlayingMovies";
import getUpcomingMovies from "@/api/getUpcomingMovies";
import getMovieById from "@/api/getMovieById";
import getMovieByQuery from "@/api/getMovieByQuery";
import getMovieCast from "@/api/getMovieCast";
import getMovieGenres from "@/api/getMovieGenres";
import getMovieReviews from "@/api/getMovieReviews";
import getMovieTrailers from "@/api/getMovieTrailers";
import getSimilarMovies from "@/api/getSimilarMovies";
import userLogIn from "@/api/userLogin";
import userSignUp from "@/api/userSignUp";
import userLogOut from "./userLogOut";
import creatUser from "@/api/creatUser";
import addToWatchlist from "@/api/addToWatchlist";
import removeFromWatchlist from "@/api/removeFromWatchlist";
import addToFavoriteList from "./addToFavoriteList";
import removeFromFavoriteList from "./removeFromFavoriteList";

export {
  getTrendingMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
  getMovieById,
  getMovieByQuery,
  getMovieCast,
  getMovieGenres,
  getMovieReviews,
  getMovieTrailers,
  getSimilarMovies,
  userLogIn,
  userSignUp,
  userLogOut,
  creatUser,
  addToWatchlist,
  removeFromWatchlist,
  addToFavoriteList,
  removeFromFavoriteList,
};

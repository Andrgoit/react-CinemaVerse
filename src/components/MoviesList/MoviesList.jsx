import { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination, Modal, MovieDetails } from "@/components";

import styles from "./MoviesList.module.css";

export default function MoviesList({ movies, pageChanger }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chosenMovie, setChosenMovie] = useState(null);

  if (!movies) return null;

  const { page, results = [], total_pages } = movies;
  console.log("movies", movies);

  const closeModal = () => setIsModalOpen(false);
  const openModal = (movie) => {
    setIsModalOpen(true);
    setChosenMovie(movie);
  };

  const elements = results.map(({ id, title, vote_average, poster_path }) => (
    <li key={id}>
      <Link to={`/movie/${id}`}>
        <p>{id}</p>
        <p>{title}</p>
        <p>{vote_average}</p>
      </Link>
    </li>
  ));
  return (
    <div>
      <ul>{elements}</ul>

      {/* {isModalOpen && (
        <Modal close={closeModal}>
          <MovieDetails movieDitails={chosenMovie} genres={genres} />
          <Link
            to={`/movie/${chosenMovie.id}`}
            className={styles.link}
            onClick={closeModal}
          >
            Show more
          </Link>
        </Modal>
      )} */}

      <Pagination
        page={page}
        total_pages={total_pages}
        pageChanger={pageChanger}
      />
    </div>
  );
}

// {
//   "page": 1,
//   "results": [
//     {
//       "adult": false,
//       "backdrop_path": "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
//       "genre_ids": [
//         18,
//         53,
//         35
//       ],
//       "id": 550,
//       "original_language": "en",
//       "original_title": "Fight Club",
//       "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
//       "popularity": 73.433,
//       "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
//       "release_date": "1999-10-15",
//       "title": "Fight Club",
//       "video": false,
//       "vote_average": 8.433,
//       "vote_count": 26279
//     },
//   ],
//   "total_pages": 2,
//   "total_results": 39
// }

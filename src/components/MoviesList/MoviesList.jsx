import { Link } from "react-router-dom";

export default function MoviesList({ movies }) {
  console.log("movies", movies);

  const elements = movies.map(({ id, title, vote_average }) => (
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
    </div>
  );
}

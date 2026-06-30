import { Link } from "react-router-dom";

export default function Section({ title = null, category = null, children }) {
  return (
    <div>
      <div>
        {title ? <h2>{title}</h2> : null}
        {category ? <Link to={category}>View all</Link> : null}
      </div>
      {children}
    </div>
  );
}

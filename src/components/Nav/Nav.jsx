import { NavLink } from "react-router-dom";
import styles from "@/components/Nav/Nav.module.css";
import navItems from "@/data/navItems";

export default function Nav() {
  const elements = navItems.map(({ id, label, href }) => (
    <li key={id}>
      <NavLink to={href}>{label}</NavLink>
    </li>
  ));
  return (
    <nav>
      <ul>{elements}</ul>
    </nav>
  );
}

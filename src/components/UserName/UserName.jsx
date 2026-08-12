import { useSelector } from "react-redux";

import styles from "./UserName.module.css";

export default function UserName() {
  const userName = useSelector((state) => state.user.user.displayName);

  return userName && <span>{userName}</span>;
}

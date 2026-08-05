import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute() {
  const isLogined = useSelector((state) => state.user.user.uid);

  if (!isLogined) return <Navigate to="/" />;

  return <Outlet />;
}

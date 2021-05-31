import { Route, Navigate } from "react-router";
import { useAuth } from "./auth-context";

export const PrivateRoute = ({ path, ...props }) => {
  const { login } = useAuth();

  return login ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} to="/login" />
  );
};

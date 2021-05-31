import { useAuth } from "./auth-context";
import { useLocation, useNavigate } from "react-router";

export const Login = () => {
  const { logout } = useAuth();

  const { login, verifyCredentials } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  const loginHandler = () => {
    verifyCredentials("suyash", "pradhan");
    navigate(state?.from ? state.from : "/");
  };

  return (
    <div>
      {login ? <h1>Welcome User</h1> : <h1>Please login</h1>}
      {login ? (
        <button onClick={logout}>logout</button>
      ) : (
        <button onClick={loginHandler}>login</button>
      )}
    </div>
  );
};

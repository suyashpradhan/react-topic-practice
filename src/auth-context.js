import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { fakeAuth } from "./fakeAuth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = JSON.parse(localStorage.getItem("login"));

    loginStatus?.login && setLogin(true);
  }, []);

  const logout = async () => {
    localStorage?.removeItem("login");
    setLogin(false);
    navigate("/home");
  };

  const verifyCredentials = async (username, password) => {
    try {
      const response = await fakeAuth(username, password);
      console.log({ response });
      if (response.success) {
        setLogin(true);
        localStorage?.setItem("login", JSON.stringify({ login: true }));
      }
    } catch (error) {
      console.log("Invalid Username", error);
    }
  };

  return (
    <AuthContext.Provider value={{ login, verifyCredentials, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import React, { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config.js";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    isLoggedIn();
  }, []);

  const login = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, data, {
        withCredentials: true,
      });
      setLoggedInUser(response?.data?.user);
      setIsAuthenticated(response?.data?.success);
    } catch (error) {
      console.log(error);
    }
  };

  const isLoggedIn = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/auth/status`, {
        withCredentials: true,
      });

      const userData = response?.data?.user;

      setLoggedInUser({ id: userData.id, username: userData.username });
      setIsAuthenticated(response?.data?.success);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );

      if (response?.data?.success) {
        setIsAuthenticated(false);
        setLoggedInUser(null);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.message);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loading,
        setLoading,
        login,
        isLoggedIn,
        logout,
        errorMessage,
        setErrorMessage,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };

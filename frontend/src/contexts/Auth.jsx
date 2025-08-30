import React, { useState, useEffect } from "react";
import axios from "axios";

const AuthContext = React.createContext();

function AuthProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  // TODO: Create login() isLoggedIn() and logout()

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, setLoading }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };

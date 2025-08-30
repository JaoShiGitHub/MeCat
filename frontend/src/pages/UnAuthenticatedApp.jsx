import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

function UnAuthenticatedApp() {
  return (
    <Routes>
      <Route path="/login" element={LoginPage} />
      <Route path="/register" element={RegisterPage} />

      <Route path="*" element={LoginPage} />
    </Routes>
  );
}

export default UnAuthenticatedApp;

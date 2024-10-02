import Home from "./routes/Homepage";
import Auth from "./routes/Auth";
import Dashboard from "./routes/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useState, useEffect } from "react";

const App = () => {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("isAuth") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isAuth", isAuth);
  }, [isAuth]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth setIsAuth={setIsAuth} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuth={isAuth}>
                <Dashboard setIsAuth={setIsAuth} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import LoginPage from "../Pages/LoginPage";
import MainPage from "../Pages/MainPage.jsx";
import RegisterPage from "../Pages/RegisterPage";
import AuthContext from "../store/auth-context";

function Router() {
  const authCtx = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/"
        element={!authCtx.isLoggedIn && <LoginPage onLogin={authCtx.onLogin} />}
      />
      <Route
        path="/main"
        element={
          authCtx.isLoggedIn && (
            <MainPage
              isAuthenticated={authCtx.isLoggedIn}
              onLogout={authCtx.onLogout}
            />
          )
        }
      />
      <Route
        path="/register"
        element={!authCtx.isLoggedIn && <RegisterPage />}
      />
    </Routes>
  );
}

export default Router;

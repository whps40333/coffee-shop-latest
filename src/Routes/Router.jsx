import { Route, Routes } from "react-router-dom";

import LoginPage from "../Pages/LoginPage";
import MainPage from "../Pages/MainPage.jsx";
import RegisterPage from "../Pages/RegisterPage";
import UserLayout from "../Pages/UserLayout";

function Router() {
  return (
    <Routes>
      <Route path="/coffee-shop-latest/" element={<LoginPage />} />
      <Route path="/coffee-shop-latest/main" element={<MainPage />} />
      <Route path="/coffee-shop-latest/register" element={<RegisterPage />} />
      <Route
        path="/coffee-shop-latest/user/*"
        element={
          <Routes>
            <Route path="/" element={<UserLayout />} />
          </Routes>
        }
      />
    </Routes>
  );
}

export default Router;

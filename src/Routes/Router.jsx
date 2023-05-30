import { Route, Routes } from "react-router-dom";

import LoginPage from "../Pages/LoginPage";
import MainPage from "../Pages/MainPage.jsx";
import RegisterPage from "../Pages/RegisterPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default Router;

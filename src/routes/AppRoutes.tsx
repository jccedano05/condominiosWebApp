import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Authentication } from "../pages/authentication/Authentication";
import { ForgotPassword } from "../components/templates/forgotPassword/ForgotPassword";
import { Login } from "../components/templates/login/Login";
import { RequireAuth } from "./RequireAuth";
import { Home } from "../pages/home/Home";
import { Missing } from "../pages/missing/Missing";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Authentication children={<Login />} />}
        />

        <Route
          path="/forgot-password"
          element={<Authentication children={<ForgotPassword />} />}
        />

        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* <Route
          path="/forgotPassword"
          element={<Authentication children={<ForgotPassword />} />}
        /> */}
        {/* <Route
          path="/dashboard/productos"
          element={<PrivateRoutes children={<Products />} />}
        /> */}

        <Route path="*" element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
};

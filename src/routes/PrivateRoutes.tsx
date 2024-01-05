import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  // isAuthenticated: boolean;
  children: JSX.Element | null;
  // redirectTo?: string;
}

export const PrivateRoutes = (props: Props) => {
  const { children } = props;
  const { user } = useAuth();
  if (user || localStorage.getItem("token")) {
    return children ? children : <Outlet />;
  }
  return <Navigate to={"/login"} />;
};

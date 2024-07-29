import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../hooks";
import { PrivateRoute } from "./route/PrivateRoute";
import { RestrictedRoute } from "./route/RestrictedRoute";
import { refreshUser } from "../redux/operations/authOperation";
import { MainLayout } from "../components/layouts/MainLayout";
import { lazy } from "react";
import Loader from "./Loader";
import { Box } from "@mui/material";

const HomePage = lazy(() => import("../pages/HomePage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh">
      <Loader />
    </Box>
  ) : (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

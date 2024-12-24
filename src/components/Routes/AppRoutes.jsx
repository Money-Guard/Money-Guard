import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router";
import Layout from "../Layout/index";
import DefaultRoutes from "./DefaultRoutes";
import PrivateRoute from "./PrivateRoute";
const LoginPage = lazy(() => import("../../pages/LoginPage/index"));
const RegistirationPage = lazy(() =>
  import("../../pages/RegistrationPage/index")
);
const HomePage = lazy(() => import("../../pages/Home/index"));
const DashboardPage = lazy(() => import("../../pages/DashboardPage/index"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/index"));
export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Lazy loading</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route element={<DefaultRoutes />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistirationPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

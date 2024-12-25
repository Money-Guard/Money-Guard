import React, { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router";
import Layout from "../Layout/index";
import DefaultRoutes from "./DefaultRoutes";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../DashboardLayout";
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const RegistirationPage = lazy(() => import("../../pages/RegistrationPage"));
const Deneme = lazy(() => import("../Deneme"));
const DashboardPage = lazy(() => import("../../pages/DashboardPage/index"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/index"));
export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Lazy loading</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<DefaultRoutes />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistirationPage />} />
          </Route>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route element={<PrivateRoutes />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<DashboardPage />}>
                {/* Buraya sağ taraftaki istatistik ve transaction list componentleri gelicek / sz eklenicek */}
                <Route path="statics" element={<Deneme />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

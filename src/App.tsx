import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import SpinLoader from "./components/loader/spin.loader";
import {useSelector } from "react-redux";
import { loginSelector } from "./redux/slices/login.slices";

// Pages
const Login = React.lazy(() => import("./views/login"));
const RegistrationPage = React.lazy(() => import("./views/signup"));
//Layout
const DefaultLayout = React.lazy(
  () => import("./components/layout/dashboard-layout")
);

function App() {
  const { auth} =useSelector(loginSelector);
 
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinLoader />}>
        <Routes>
          <Route
            path="/login"
            element={auth ? <Navigate to="/" replace /> : <Login />}
          />
          <Route
            path="/signup"
            element={
              auth ? <Navigate to="/" replace /> : <RegistrationPage />
            }
          />
          <Route
            path="*"
            element={
              auth ? <DefaultLayout /> : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
  Routes,
} from "react-router-dom";
import { LogIn } from "../Pages/Pub/LogIn.jsx";
import { SignUp } from "../Pages/Pub/SignUp.jsx";
import { ProductsPage } from "../Pages/ProductsPage.jsx";
import { ProfilePage } from "../Pages/ProfilePage.jsx";
import { SingleProdPage } from "../Pages/SingleProdPage.jsx";
import { isAuthenticated } from "./Auth/AuthService.jsx";

export function Router() {
  const [access, setAccess] = useState();
  console.log("ACCESS", access);
  useEffect(() => {
    isAuthenticated() ? setAccess(true) : setAccess(false);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/login"
          element={
            <PublicRoute access={access} route={<LogIn />} navigateTo="/" />
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute access={access} route={<SignUp />} navigateTo="/" />
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute
              access={access}
              route={<ProductsPage />}
              navigateTo="/login"
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              access={access}
              route={<ProfilePage />}
              navigateTo="/login"
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute
              access={access}
              route={<SingleProdPage />}
              navigateTo="/login"
            />
          }
        />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

function ProtectedRoute({ access, route, navigateTo }) {
  return access ? route : <Navigate to={navigateTo} replace={true} />;
}

function PublicRoute({ access, route, navigateTo }) {
  return !access ? route : <Navigate to={navigateTo} replace={true} />;
}

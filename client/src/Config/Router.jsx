import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { LogIn } from "../Pages/LogIn";
import { SignUp } from "../Pages/SignUp";
import { ProductsPage } from "../Pages/ProductsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<ProductsPage />} />
      <Route path="/product/:id" element={<ProductsPage />} />
    </>
  )
);

export function Router() {
  return <RouterProvider router={router} />;
}

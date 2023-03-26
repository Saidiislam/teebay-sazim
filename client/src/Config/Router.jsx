import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {LogIn} from "../Pages/Pub/LogIn.jsx";
import {SignUp} from "../Pages/Pub/SignUp.jsx";
import {ProductsPage} from "../Pages/ProductsPage.jsx";
import {ProfilePage} from "../Pages/ProfilePage.jsx";
import {SingleProdPage} from "../Pages/SingleProdPage.jsx";
;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<ProductsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/product/:id" element={<SingleProdPage />} />
    </>
  )
);

export function Router() {
  return <RouterProvider router={router} />;
}

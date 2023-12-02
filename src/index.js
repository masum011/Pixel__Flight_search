import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./pages/beforeAuth/Login";
import Home from "./pages/afterAuth/Home";
import { store } from "./store/store";
import Forget from "./pages/beforeAuth/Forget";
import PrivateRoute from "./pages/privateRoute/PrivateRoute";
import FlightList from "./pages/afterAuth/flightList/FlightList";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <PrivateRoute isPrivate={false}>
        <Login />
      </PrivateRoute>
    ),
  },
  {
    path: "/forget",
    element: (
      <PrivateRoute isPrivate={false}>
        <Forget />
      </PrivateRoute>
    ),
  },
  {
    path: "/flight-search",
    element: (
      <PrivateRoute isPrivate={true}>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/flight-list",
    element: (
      <PrivateRoute isPrivate={true}>
        <FlightList/>
      </PrivateRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

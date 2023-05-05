import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Banner";
import Layout from "../Layout/Layout";
import Banner from "../components/Banner";
import LogWithEmailAndPass from "../components/LogWithEmailAndPass";
import Register from "../components/Register";
import ErrorPage from "../components/ErrorPage";
import Recipes from "../components/Recipes";
import ProviteRoute from "../components/proviteRoute/ProviteRoute";
import Blogs from "../components/Blogs";
import UserLogTrueOrFalse from "../components/AuthProvider/UserLogTrueOrFalse";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/login",
        element: (
          <UserLogTrueOrFalse>
            <LogWithEmailAndPass />
          </UserLogTrueOrFalse>
        ),
      },
      {
        path: "/register",
        element: (
          <UserLogTrueOrFalse>
            <Register />
          </UserLogTrueOrFalse>
        ),
      },
      {
        path: "/recipes/:id",
        element: (
          <ProviteRoute>
            <Recipes />
          </ProviteRoute>
        ),
      },
      {
        path: "/blogs",
        element: (
          <ProviteRoute>
            <Blogs />
          </ProviteRoute>
        ),
      },
    ],
  },
]);

export default Routes;

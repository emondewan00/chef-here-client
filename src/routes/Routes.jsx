import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Banner";
import Layout from "../Layout/Layout";
import Banner from "../components/Banner";
import LogWithEmailAndPass from "../components/LogWithEmailAndPass";
import Register from "../components/Register";
import ErrorPage from "../components/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/login",
        element: <LogWithEmailAndPass />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default Routes;

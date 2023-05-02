import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Banner";
import Layout from "../Layout/Layout";
import Banner from "../components/Banner";
import Shef from "../components/Shef";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Banner />,
        
      },
    ],
  },
]);

export default Routes;

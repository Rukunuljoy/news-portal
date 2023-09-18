import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts";
import Home from "./components/home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
    ],
  },
]);

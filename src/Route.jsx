import Header from "./components/common/header/Header";
import {
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
  },
]);
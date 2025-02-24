import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Error from "@/components/shared/Error";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "sign-in",
    element: <Login />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
]);

export default Route;

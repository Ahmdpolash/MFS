import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Error from "@/components/shared/Error";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<Error/>
  },
]);

export default Route;

import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Error from "@/components/shared/Error";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import DashboardLayout from "@/layout/DashboardLayout";
import AdminHome from "@/pages/dashboard/admin/AdminHome";
import AllAgent from "@/pages/dashboard/agent/all-agent";

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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <AdminHome />,
      },
      {
        path: "all-agents",
        element: <AllAgent />,
      },
    ],
  },
]);

export default Route;

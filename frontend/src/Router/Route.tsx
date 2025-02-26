import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Error from "@/components/shared/Error";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import DashboardLayout from "@/layout/DashboardLayout";

import AllAgent from "@/pages/dashboard/agent/all-agent";
import { UserDashboard } from "@/pages/dashboard/user/user-dashboard";
import { SentMoney } from "@/pages/dashboard/user/send-money";
import { Cashout } from "@/pages/dashboard/user/cashout";
import { AdminHome } from "@/pages/dashboard/admin/AdminHome";
import { AgentHome } from "@/pages/dashboard/agent/agentHome";






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
    path: `/dashboard`,
    element: <DashboardLayout />,
    children: [
      {
        path: "admin",
        element: <AdminHome />,
      },
      {
        path: "agent",
        element: <AgentHome />,
      },
      {
        path: "all-agents",
        element: <AllAgent />,
      },
      {
        path: "user",
        element: <UserDashboard />,
      },
      {
        path: "send-money",
        element: <SentMoney />,
      },
      {
        path: "cashout",
        element: <Cashout />,
      },
    ],
  },
]);

export default Route;

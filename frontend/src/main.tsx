import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import Route from "./Router/Route";
import { AuthProvider } from "./context/user-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Route} />
    </AuthProvider>
  </StrictMode>
);

import { createBrowserRouter, Navigate } from "react-router-dom";
import { PATHS } from "./paths";

// Layouts & Guards
import { AppLayout } from "@/components/layout/AppLayout";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";

// Features (Pantallas)
import { Login } from "@/features/auth/pages/LoginPage";
import { Register } from "@/features/auth/pages/RegisterPage";
import { Home } from "@/features/auth/home/pages/HomePage";

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: PATHS.LOGIN, element: <Login /> },
          { path: PATHS.REGISTER, element: <Register /> },
        ],
      },
    ],
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <AppLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: PATHS.PROFILE, element: <div>Perfil de Mascota (Placeholder)</div> },
        ],
      },
    ],
  },

  { path: "*", element: <Navigate to={PATHS.LOGIN} replace /> },
]);

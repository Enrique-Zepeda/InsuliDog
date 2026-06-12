import { createBrowserRouter, Navigate } from "react-router-dom";
import { PATHS } from "./paths";

// Layouts & Guards
import { AppLayout, AuthLayout } from "@/app/layout";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";
import { Login, ForgotPassword, Register, ResetPassword } from "@/features/auth/pages";
import { Home } from "@/features/dashboard/pages/HomePage";

// Features (Pantallas)

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
    element: <AuthLayout />,
    children: [
      { path: PATHS.FORGOT_PASSWORD, element: <ForgotPassword /> },
      { path: PATHS.RESET_PASSWORD, element: <ResetPassword /> },
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

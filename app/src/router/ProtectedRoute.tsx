import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "./paths";

export function ProtectedRoute() {
  // TODO: Estado global (Redux) o un hook de Auth

  const isLoading = false; // Cambiará a true mientras Supabase verifica el token
  const session = true; // Cambia a true manual si quieres ver el layout principal

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-zinc-50">
        <p className="text-zinc-500">Cargando...</p> {/* Luego pondrás un spinner de shadcn aquí */}
      </div>
    );
  }

  if (!session) {
    return <Navigate to={PATHS.LOGIN} replace />;
  }

  return <Outlet />;
}

import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "./paths";

export function PublicRoute() {
  // TODO: Conectar a Redux/Supabase
  const isLoading = false;
  const session = true;

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-zinc-50">
        <p className="text-zinc-500">Cargando...</p>
      </div>
    );
  }

  if (session) {
    // Si ya tiene sesión activa, lo mandamos directo al dashboard de inicio
    return <Navigate to={PATHS.HOME} replace />;
  }

  return <Outlet />;
}

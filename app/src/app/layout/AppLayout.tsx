// src/components/layout/AppLayout.tsx
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { BottomNav } from "./BottomNav";

export function AppLayout() {
  return (
    <div className="flex min-h-dvh w-full overflow-hidden bg-background text-foreground">
      {/* Menú lateral (PC) */}
      <Sidebar />

      {/* Área central con el contenido inyectado */}
      <div className="relative flex w-full flex-1 flex-col">
        <main className="flex-1 overflow-y-auto p-4 pb-24 md:p-8 md:pb-8">
          <div className="mx-auto w-full max-w-4xl">
            <Outlet />
          </div>
        </main>

        {/* Menú inferior (Móvil) */}
        <BottomNav />
      </div>
    </div>
  );
}

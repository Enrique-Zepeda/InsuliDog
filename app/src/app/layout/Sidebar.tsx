import { NavLink } from "react-router-dom";
import { LogoutButton } from "@/features/auth/components/LogoutButton";
import { MAIN_NAV_ITEMS } from "@/app/router/paths";

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-card border-r border-border">
      <div className="p-6 border-b border-border">
        <h2 className="text-2xl font-bold text-foreground">InsulinDog</h2>
      </div>

      <nav className="flex flex-col gap-2 p-4 flex-1">
        {MAIN_NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}

        <LogoutButton variant="ghost">Salir</LogoutButton>
      </nav>
    </aside>
  );
}

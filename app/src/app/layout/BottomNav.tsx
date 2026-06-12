import { NavLink } from "react-router-dom";
import { LogoutButton } from "@/features/auth/components/LogoutButton";
import { MAIN_NAV_ITEMS } from "@/app/router/paths";

export function BottomNav() {
  return (
    <nav className="md:hidden absolute bottom-0 left-0 right-0 h-16 bg-card border-t border-border flex items-center justify-around px-2 pb-safe z-50">
      {MAIN_NAV_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-1 w-full h-full text-xs transition-colors ${
              isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
            }`
          }
        >
          <span className="text-xl leading-none">{item.icon}</span>
          <span>{item.label}</span>
        </NavLink>
      ))}

      <LogoutButton variant="ghost" className="justify-start text-muted-foreground hover:text-foreground">
        Salir
      </LogoutButton>
    </nav>
  );
}

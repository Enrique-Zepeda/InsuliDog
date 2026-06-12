export const PATHS = {
  // Públicas
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",

  // Privadas
  HOME: "/",
  PROFILE: "/profile",
  HISTORY: "/history",
};

export const MAIN_NAV_ITEMS = [
  {
    label: "Inicio",
    to: PATHS.HOME,
    icon: "🏠",
  },
  {
    label: "Perfil",
    to: PATHS.PROFILE,
    icon: "🐶",
  },
  {
    label: "Historial",
    to: PATHS.HISTORY,
    icon: "📋",
  },
] as const;

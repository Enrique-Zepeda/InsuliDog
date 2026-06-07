import { PATHS } from "@/router/paths";

export function Login() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">Login</h1>
      <a href={PATHS.REGISTER} className="text-blue-500 block mt-4">
        ¿No tienes cuenta? Regístrate
      </a>
      <a href={PATHS.HOME} className="text-green-600 block mt-4 font-bold text-xl">
        → ENTRAR A LA APP (SIMULAR LOGIN)
      </a>
    </div>
  );
}

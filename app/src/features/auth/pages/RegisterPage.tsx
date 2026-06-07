import { PATHS } from "@/router/paths";

export function Register() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">Registro</h1>
      <a href={PATHS.LOGIN} className="text-blue-500 block mt-4">
        Ya tengo cuenta. Loguearme.
      </a>
    </div>
  );
}

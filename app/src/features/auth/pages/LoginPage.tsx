import { Link } from "react-router-dom";
import { PATHS } from "@/app/router/paths";
import { Button } from "@/components/ui/button";
import { AuthAlert, AuthCard, AuthFooterLink, AuthTextField } from "@/features/auth/components";
import { useLoginForm } from "@/features/auth/hooks/useLoginForm";

export function Login() {
  const { form, isLoading, error, onSubmit } = useLoginForm();

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <AuthCard title="Iniciar sesión" description="Accede a tu cuenta de InsulinDog.">
      <form onSubmit={onSubmit} className="space-y-4">
        <AuthTextField
          id="email"
          label="Correo electrónico"
          placeholder="tu@email.com"
          type="email"
          registration={register("email")}
          error={errors.email}
        />

        <AuthTextField
          id="password"
          label="Contraseña"
          placeholder="Tu contraseña"
          type="password"
          registration={register("password")}
          error={errors.password}
        />

        <div className="text-right">
          <Link to={PATHS.FORGOT_PASSWORD} className="text-sm font-medium text-primary hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <AuthAlert message={error} variant="error" />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
        </Button>
      </form>

      <AuthFooterLink text="¿No tienes cuenta?" linkText="Regístrate" to={PATHS.REGISTER} />
    </AuthCard>
  );
}

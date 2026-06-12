import { PATHS } from "@/app/router/paths";
import { Button } from "@/components/ui/button";
import { AuthAlert, AuthCard, AuthFooterLink, AuthTextField } from "@/features/auth/components";
import { useForgotPasswordForm } from "@/features/auth/hooks/useForgotPasswordForm";

export function ForgotPassword() {
  const { form, isLoading, error, successMessage, onSubmit } = useForgotPasswordForm();

  const {
    register,
    formState: { errors },
  } = form;

  return (
    <AuthCard
      title="Recuperar contraseña"
      description="Escribe tu correo y te enviaremos un link para restablecer tu contraseña."
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <AuthTextField
          id="email"
          label="Correo electrónico"
          placeholder="tu@email.com"
          type="email"
          registration={register("email")}
          error={errors.email}
        />

        <AuthAlert message={error} variant="error" />

        <AuthAlert message={successMessage} variant="success" />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Enviando correo..." : "Enviar link de recuperación"}
        </Button>
      </form>

      <AuthFooterLink text="¿Recordaste tu contraseña?" linkText="Inicia sesión" to={PATHS.LOGIN} />
    </AuthCard>
  );
}

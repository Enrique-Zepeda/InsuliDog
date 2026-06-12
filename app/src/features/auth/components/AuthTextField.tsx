import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { useState, type HTMLInputTypeAttribute } from "react";
import { Eye, EyeOff } from "lucide-react";

type AuthTextFieldProps = {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  error?: FieldError;
  registration: UseFormRegisterReturn;
};

export function AuthTextField({ id, label, type = "text", placeholder, error, registration }: AuthTextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";

  const inputType = isPasswordField && showPassword ? "text" : type;

  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-foreground">
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          className={`w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 ${
            isPasswordField ? "pr-10" : ""
          } ${error ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/30" : ""}`}
          {...registration}
        />

        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      {error && <p className="mt-1 text-sm text-destructive">{error.message}</p>}
    </div>
  );
}

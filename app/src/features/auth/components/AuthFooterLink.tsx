import { Link } from "react-router-dom";

type AuthFooterLinkProps = {
  text: string;
  linkText: string;
  to: string;
};

export function AuthFooterLink({ text, linkText, to }: AuthFooterLinkProps) {
  return (
    <p className="mt-6 text-center text-sm text-muted-foreground">
      {text}{" "}
      <Link to={to} className="font-medium text-primary hover:underline">
        {linkText}
      </Link>
    </p>
  );
}

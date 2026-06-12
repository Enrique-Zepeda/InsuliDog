import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import insulinDogLogo from "@/assets/insulinDogLogo.png";
import type { ReactNode } from "react";

type AuthCardProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function AuthCard({ title, description, children }: AuthCardProps) {
  return (
    <Card className="w-full max-w-md border-border/60 shadow-lg shadow-primary/5">
      <CardHeader className="items-center text-center">
        <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-2xl p-2">
          <img src={insulinDogLogo} alt="InsulinDog logo" className="h-full w-full object-contain" />
        </div>
        <CardTitle className="text-2xl font-bold text-balance">{title}</CardTitle>
        <CardDescription className="text-pretty">{description}</CardDescription>
      </CardHeader>

      <CardContent>{children}</CardContent>
    </Card>
  );
}

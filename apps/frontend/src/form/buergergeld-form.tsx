import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Application, ApplicationSchema } from "@repo/model";
import { ReactNode } from "react";

export function BuergergeldForm({ children }: { children: ReactNode }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Application>({
    resolver: zodResolver(ApplicationSchema),
  });

  const onSubmit = (data: Application) => {
    console.log("Valid Data:", data);
  };

  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
}

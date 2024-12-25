"use client";

import { FormProvider, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Application, ApplicationSchema } from "@repo/model";
import { useState } from "react";
import { PersonalInfoInput } from "./personal-info-input";

export function BuergergeldForm() {
  const [pageCount, setPageCount] = useState(0);

  const methods = useForm<Application>({
    resolver: zodResolver(ApplicationSchema),
    defaultValues: defaultValues,
  });

  const onSubmit = (data: Application) => {
    console.log("Valid Data:", data);
  };

  const next = () => setPageCount(pageCount + 1);

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-2"
      >
        {pageCount === 0 ? <PersonalInfoInput next={next} /> : null}
      </form>
    </FormProvider>
  );
}

const defaultValues = {
  personalInfo: {
    name: "",
    surname: "",
  },
} satisfies Application;

"use client";

import { FormProvider, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Application, ApplicationSchema } from "@repo/model";
import { useState } from "react";
import { PersonalInfoInput } from "./personal-info-input";
import { HousingInput } from "./housing-input";

export function BuergergeldForm() {
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const methods = useForm<Application>({
    resolver: zodResolver(ApplicationSchema),
  });

  const onSubmit = (data: Application) => {
    console.log("Valid Data:", data);
    setLoading(true);
  };

  const next = () => setPageCount(1);
  const back = () => setPageCount(0);

  return loading ? (
    <p>LADEN</p>
  ) : (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(
          (data) => {
            console.log(data);
            onSubmit(data);
          },
          (errors) => {
            console.log(errors);
          }
        )}
        className="grid grid-cols-1 gap-2"
      >
        {pageCount === 0 ? <PersonalInfoInput next={next} /> : null}
        {pageCount === 1 ? <HousingInput back={back} /> : null}
      </form>
    </FormProvider>
  );
}
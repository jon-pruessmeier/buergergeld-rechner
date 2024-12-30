"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Application, ApplicationSchema } from "@repo/model";
import { useState } from "react";
import { PersonalInfoInput } from "./personal-info-input";
import { HousingInput } from "./housing-input";
import { useSubmit } from "./use-submit";

export function BuergergeldForm() {
  const { pageCount, next, back } = usePageCount();
  const { onSubmit, status, result } = useSubmit();

  const methods = useForm<Application>({
    resolver: zodResolver(ApplicationSchema),
  });

  if (status === "ERROR") {
    return (
      <p>
        Irgendetwas ist schief gelaufen... Bitte versuchen Sie es noch einmal
        von vorne.
      </p>
    );
  }

  if (status === "LOADING") {
    return <p>Daten werden geladen!</p>;
  }

  if (status === "SUBMITTED") {
    return (
      <div className="flex flex-col items-center text-primary text-xl font-semibold">
        <p className="text-xl font-semibold text-center mx-2 mt-4">
          Herzlichen Glückwunsch!
        </p>
        <p className="text-xl font-semibold text-center mx-2 mb-4">
          Dir steht so viel zu: {result}
        </p>
        <iframe
          src="https://giphy.com/embed/IwAZ6dvvvaTtdI8SD5"
          width="300"
          height="300"
          className="giphy-embed"
        ></iframe>
      </div>
    );
  }

  return (
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
        className="grid grid-cols-1 gap-4"
      >
        {pageCount === 0 ? <PersonalInfoInput next={next} /> : null}
        {pageCount === 1 ? <HousingInput back={back} /> : null}
      </form>
    </FormProvider>
  );
}

const usePageCount = () => {
  const [pageCount, setPageCount] = useState(0);
  const next = () => setPageCount(1);
  const back = () => setPageCount(0);

  return { pageCount, next, back };
};

"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Application, ApplicationSchema } from "@repo/model";
import { useState } from "react";
import { PersonalInfoInput } from "./personal-info-input";
import { HousingInput } from "./housing-input";
import { useApi } from "../hooks/use-api";

export function BuergergeldForm() {
  const { postApplication } = useApi();

  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const methods = useForm<Application>({
    resolver: zodResolver(ApplicationSchema),
  });

  const onSubmit = async (data: Application) => {
    console.log("Valid Data:", data);
    setLoading(true);
    const answer = await postApplication(data);
    if (answer) {
      setSubmitted(true);
      setLoading(false);
    }
  };

  const next = () => setPageCount(1);
  const back = () => setPageCount(0);

  return loading ? (
    <p>LADEN</p>
  ) : submitted ? (
    <p>Submitted</p>
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

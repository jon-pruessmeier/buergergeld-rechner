import { useState } from "react";
import { useApi } from "../../hooks/use-api";
import { Application } from "@repo/model";

type Status = "NONE" | "LOADING" | "SUBMITTED" | "ERROR";

export const useSubmit = () => {
  const { postApplication, getResultById } = useApi();

  const [status, setStatus] = useState<Status>("NONE");

  const [result, setResult] = useState(0);

  const onSubmit = async (data: Application) => {
    try {
      console.log("Valid Data:", data);
      setStatus("LOADING");
      const id = await postApplication(data);
      if (!id) throw new Error("Missing id");

      console.log(id);
      const result = await getResultById(id);
      if (!result) throw new Error("Error on result calculation");
      setStatus("SUBMITTED");
      setResult(result);
    } catch (e) {
      console.error(e);
      setStatus("ERROR");
    }
  };

  return { status, result, onSubmit };
};

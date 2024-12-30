import { Application } from "@repo/model";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export function HousingInput({ back }: { back: () => void }) {
  const { register, watch, setValue } = useFormContext<Application>();

  const housingType = watch("housing.type");

  const additionalCosts = watch("housing.additionalCostsMonth");
  const heatingCosts = watch("housing.heatingCostsMonth");

  useEffect(() => {
    if (housingType === "OWNERSHIP") setValue("housing.coldRentMonth", null);
    if (housingType === "RENT") setValue("housing.loanInterestMonth", null);
  }, [housingType, setValue]);

  return (
    <>
      <h3>Schritt 2: Wohnsituation</h3>

      <>
        <p>Wie wohnen Sie?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <fieldset className="flex flex-row gap-4">
            <div className="flex flex-row gap-1 items-center">
              <input
                {...register("housing.type")}
                type="radio"
                value={"RENT"}
                className="appearance-none w-4 h-4 border border-gray-300 rounded-full checked:bg-primary focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <label>Miete</label>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <input
                {...register("housing.type")}
                type="radio"
                value={"OWNERSHIP"}
                className="appearance-none w-4 h-4 border border-gray-300 rounded-full checked:bg-primary focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <label className="">Eigentum</label>
            </div>
          </fieldset>
        </div>
      </>

      {housingType === "RENT" ? (
        <div className="flex items-center gap-2">
          <label>Kaltmiete:</label>
          <input
            key={"coldRentMonth"}
            {...register("housing.coldRentMonth", {
              valueAsNumber: true,
            })}
            placeholder="Kaltmiete eingeben..."
            type="number"
            min={0}
            className="form-input max-w-56"
          />
        </div>
      ) : housingType === "OWNERSHIP" ? (
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label>Kreditzins:</label>
          <input
            key={"loanInterestMonth"}
            {...register("housing.loanInterestMonth", {
              valueAsNumber: true,
            })}
            type="number"
            placeholder="Kreditzinsen eingeben..."
            min={0}
            className="form-input max-w-56"
          />
        </div>
      ) : null}

      {housingType ? (
        <>
          <label>
            Wie hoch sind Ihre monatlichen Nebenkosten (ohne Heizkosten)?
          </label>
          <input
            {...register("housing.additionalCostsMonth", {
              valueAsNumber: true,
            })}
            type="number"
            placeholder="Nebenkosten eingeben..."
            min={0}
            className="form-input max-w-56"
          />

          <label>Wie hoch sind Ihre monatlichen Heizkosten?</label>
          <input
            {...register("housing.heatingCostsMonth", {
              valueAsNumber: true,
            })}
            type="number"
            placeholder="Heizkosten eingeben..."
            min={0}
            className="form-input max-w-56"
          />
        </>
      ) : null}

      <div>
        <button
          className="next-button mr-4 bg-transparent text-gray-100 border-gray-100 border"
          onClick={back}
        >
          Zurück
        </button>
        <button
          type="submit"
          className={`next-button ${heatingCosts && additionalCosts ? "" : "opacity-50 cursor-not-allowed"}`}
          disabled={!heatingCosts || !additionalCosts}
        >
          Abschicken
        </button>
      </div>
    </>
  );
}

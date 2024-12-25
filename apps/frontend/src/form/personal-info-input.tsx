import { Application } from "@repo/model";
import { useFormContext } from "react-hook-form";
export function PersonalInfoInput({ next }: { next: () => void }) {
  const { register, trigger } = useFormContext<Application>();

  const handleNext = async () => {
    const isValid = await trigger(["personalInfo"]);
    console.log(isValid);
    if (!isValid) return;
    next();
  };

  return (
    <>
      <h3>Schritt 1: Persönliche Informationen</h3>
      <p>Wie heißen Sie?</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input
          {...register("personalInfo.name")}
          type="text"
          placeholder="Vorname"
          className="form-input"
        />
        <input
          {...register("personalInfo.surname")}
          type="text"
          placeholder="Nachname"
          className="form-input"
        />
      </div>

      <div>
        <button onClick={handleNext} className="next-button">
          Weiter
        </button>
      </div>
    </>
  );
}

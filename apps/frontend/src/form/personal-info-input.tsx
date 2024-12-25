import { PersonalInfo } from "@repo/model";
import { useFormContext } from "react-hook-form";
export function PersonalInfoInput({ next }: { next: () => void }) {
  const {
    register,
    formState: { errors },
  } = useFormContext<PersonalInfo>();

  return (
    <>
      <h3>Schritt 1: Persönliche Informationen</h3>
      <p>Wie heißen Sie?</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input
          {...register("name")}
          type="text"
          placeholder="Vorname"
          className="form-input"
        />
        <input
          {...register("surname")}
          type="text"
          placeholder="Nachname"
          className="form-input"
        />
      </div>

      <div>
        <button className="next-button">Weiter</button>
      </div>
    </>
  );
}

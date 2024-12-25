import { ReactNode } from "react";

export function RoundedBox({ children }: { children: ReactNode }) {
  return (
    <div className="border border-white p-2 w-full rounded-xl gap-2">
      {children}
    </div>
  );
}

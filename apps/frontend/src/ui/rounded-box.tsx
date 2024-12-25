import { ReactNode } from "react";

export function RoundedBox({ children }: { children: ReactNode }) {
  return (
    <div className="border border-slate-50 p-4 w-full rounded-xl  flex flex-col gap-1 bg-slate-700 bg-opacity-20">
      {children}
    </div>
  );
}

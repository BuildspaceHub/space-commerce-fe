import { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className="bg-brand text-white py-2.5 w-full font-bold rounded-xl">
      {children}
    </button>
  );
}

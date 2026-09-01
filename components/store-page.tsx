import type { ReactNode } from "react";
import { BottomNavigation } from "./bottom-navigation";
import { SearchBar } from "./search-bar";
import { StoreHeader } from "./store-header";

type StorePageProps = { title: string; description: string; children?: ReactNode };

export function StorePage({ title, description, children }: StorePageProps) {
  return (
    <>
      <StoreHeader />
      <main className="mx-auto min-h-screen w-full max-w-[1328px] px-4 sm:px-6 lg:px-8 pb-28 pt-7 sm:pt-10 md:pb-10">
        <header className="mx-auto max-w-xl md:hidden">
          <p className="mb-1 text-sm font-medium text-blue-600">Space Commerce</p>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-950">{title}</h1>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
          <div className="mt-6"><SearchBar /></div>
        </header>
        {children}
        <BottomNavigation />
      </main>
    </>
  );
}
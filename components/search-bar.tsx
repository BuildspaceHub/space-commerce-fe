"use client";

import { useId, useState, type FormEvent } from "react";
import { Icon } from "./icons";

export type SearchHandler = (query: string) => void;

export type SearchBarProps = {
  placeholder?: string;
  onSearch?: SearchHandler;
  className?: string;
};

export function SearchBar({
  className = "",
  placeholder = "Search for products, brands and categories...",
  onSearch,
}: SearchBarProps) {
  const inputId = useId();
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch?.(query.trim());
  }

  return (
    <form className={`relative w-full ${className}`} role="search" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor={inputId}>
        Search products
      </label>
      <Icon className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-[#8c8c8c]" name="search" />
      <input
        className="h-12 w-full rounded-full border border-[#5f5f5f] bg-white py-3 pl-11 pr-28 text-sm text-slate-900 outline-none transition placeholder:text-[#4f4f4f] focus:border-[#3478ed] focus:ring-2 focus:ring-[#3478ed]/20 md:h-14"
        id={inputId}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        type="search"
        value={query}
      />
      <button
        className="absolute right-2 top-1/2 h-9 min-w-24 -translate-y-1/2 rounded-full bg-[#2862e9] px-5 text-sm font-medium text-white transition hover:bg-[#1f54d0] focus:outline-none focus:ring-2 focus:ring-[#3478ed] focus:ring-offset-2 md:h-10"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

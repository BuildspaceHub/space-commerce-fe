import Link from "next/link";
import { Icon } from "./icons";
import { SearchBar } from "./search-bar";

export function StoreHeader() {
  return (
    <header className="hidden border-b border-[#e2e2e2] bg-white md:block">
      <div className="mx-auto flex h-[100px] max-w-[1328px] items-center gap-7 px-8">
        <Link aria-label="Space Commerce home" className="flex shrink-0 items-center gap-2.5 text-base font-medium text-black" href="/">
          <span aria-hidden="true" className="grid size-14 place-items-center rounded-xl bg-[#2862e9] text-[38px] font-semibold italic leading-none text-white">
            S
          </span>
          <span>Space Commerce</span>
        </Link>
        <Link aria-label="Browse categories" className="flex shrink-0 items-center gap-2 text-left text-sm text-[#515151] hover:text-[#2862e9]" href="/categories">
          <span className="leading-4">Sort by<br />Categories</span>
          <Icon className="size-5" name="chevron-down" />
        </Link>
        <SearchBar className="min-w-0 flex-1" />
        <div className="flex shrink-0 items-center gap-8 text-[#4f4f4f]">
          <Link aria-label="Account" className="flex items-center gap-1.5 hover:text-[#2862e9]" href="/account">
            <Icon className="size-7" name="account" />
            <Icon className="size-4" name="chevron-down" />
          </Link>
          <Link aria-label="Wishlist" className="hover:text-[#2862e9]" href="/wishlist">
            <Icon className="size-7" name="wishlist" />
          </Link>
          <Link aria-label="Cart" className="hover:text-[#2862e9]" href="/cart">
            <Icon className="size-7" name="cart" />
          </Link>
        </div>
      </div>
    </header>
  );
}

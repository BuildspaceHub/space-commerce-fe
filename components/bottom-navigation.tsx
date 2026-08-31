"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, type IconName } from "./icons";

export type NavigationItem = {
  href: string;
  label: string;
  icon: IconName;
};

export const navigationItems: readonly NavigationItem[] = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/categories", label: "Categories", icon: "categories" },
  { href: "/wishlist", label: "Wishlist", icon: "wishlist" },
  { href: "/cart", label: "Cart", icon: "cart" },
  { href: "/account", label: "Account", icon: "account" },
];

function isActiveRoute(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary navigation" className="fixed inset-x-0 bottom-0 z-50 border-t border-[#dddddd] bg-white pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="mx-auto grid h-[72px] max-w-[393px] grid-cols-5">
        {navigationItems.map(({ href, label, icon }) => {
          const active = isActiveRoute(pathname, href);
          return (
            <Link
              aria-current={active ? "page" : undefined}
              className={`flex min-w-0 flex-col items-center justify-center gap-1.5 text-xs leading-none transition-colors ${active ? "font-medium text-[#3478ed]" : "font-normal text-[#5f5f5f] hover:text-[#3478ed]"}`}
              href={href}
              key={href}
            >
              <Icon active={active} className="size-6" name={icon} />
              <span className="truncate">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

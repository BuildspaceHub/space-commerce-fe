"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./icons";
import { navigationItems } from "@/constants/nav";

function isActiveRoute(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#dddddd] bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <div className="mx-auto grid h-18 max-w-98.25 grid-cols-5">
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

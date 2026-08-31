import type { SVGProps } from "react";

export type IconName = "home" | "categories" | "wishlist" | "cart" | "account" | "search" | "chevron-down";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

type StoreIconProps = IconProps & { active?: boolean };

export function Icon({ active = false, name, ...props }: StoreIconProps) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      {name === "home" && (active ? (
        <>
          <path d="m3.5 10.7 8.5-7 8.5 7v9.1a1.2 1.2 0 0 1-1.2 1.2H4.7a1.2 1.2 0 0 1-1.2-1.2v-9.1Z" fill="currentColor" />
          <path d="M9 21v-6h6v6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
        </>
      ) : <path {...common} d="m3.5 10.7 8.5-7 8.5 7v9.1a1.2 1.2 0 0 1-1.2 1.2H4.7a1.2 1.2 0 0 1-1.2-1.2v-9.1Z M9 21v-6h6v6" />)}
      {name === "categories" && (active ? (
        <path d="M4 4h4.2v4.2H4V4Zm5.9 0h4.2v4.2H9.9V4Zm5.9 0H20v4.2h-4.2V4ZM4 9.9h4.2v4.2H4V9.9Zm5.9 0h4.2v4.2H9.9V9.9Zm5.9 0H20v4.2h-4.2V9.9ZM4 15.8h4.2V20H4v-4.2Zm5.9 0h4.2V20H9.9v-4.2Zm5.9 0H20V20h-4.2v-4.2Z" fill="currentColor" />
      ) : <><rect {...common} x="3.5" y="3.5" width="17" height="17" rx="1" /><path {...common} d="M3.5 9.2h17M3.5 14.8h17M9.2 3.5v17M14.8 3.5v17" /></>)}
      {name === "wishlist" && <path {...common} fill={active ? "currentColor" : "none"} d="M20.8 8.6c0 5.5-8.8 11.1-8.8 11.1S3.2 14.1 3.2 8.6a4.8 4.8 0 0 1 8.8-2.7 4.8 4.8 0 0 1 8.8 2.7Z" />}
      {name === "cart" && <><path {...common} d="M2.8 4.5h2.1l1.8 10.1a1.5 1.5 0 0 0 1.5 1.2h8.3a1.5 1.5 0 0 0 1.5-1.2l1.1-6.4H6" /><circle {...common} cx="9" cy="19.4" r="1" /><circle {...common} cx="17" cy="19.4" r="1" /></>}
      {name === "account" && <><circle {...common} cx="12" cy="7.5" r="4" /><path {...common} d="M4 21a8 8 0 0 1 16 0" /></>}
      {name === "search" && <><circle {...common} cx="10.8" cy="10.8" r="6.3" /><path {...common} d="m16 16 4.3 4.3" /></>}
      {name === "chevron-down" && <path {...common} d="m7.5 9.5 4.5 4.5 4.5-4.5" />}
    </svg>
  );
}

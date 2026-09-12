import { NavigationItem } from "@/types/nav.type";

export const navigationItems: readonly NavigationItem[] = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/categories", label: "Categories", icon: "categories" },
  { href: "/wishlist", label: "Wishlist", icon: "wishlist" },
  { href: "/cart", label: "Cart", icon: "cart" },
  { href: "/account", label: "Account", icon: "account" },
];

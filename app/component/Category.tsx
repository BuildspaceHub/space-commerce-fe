"use client"; // 👈 Add this directive right here
import { type ReactNode, useState } from "react";
import {
  ArrowLeft,
  Search,
  ChevronRight,
  Home,
  Heart,
  ShoppingCart,
  User,
} from "lucide-react";

import SportsFitnessSheet from "./categories/SportsFitnessSheet";

const browseCategories = [
  {
    name: "Phones",
  },
  {
    name: "Fashion",
  },
  {
    name: "Electronics",
  },
  {
    name: "Gaming",
  },
  {
    name: "Beauty",
  },
  {
    name: "Home",
  },
];

const allCategories = [
  "Sports & Fitness",
  "Auto Parts & Accessories",
  "Toys & Hobbies",
  "Grocery",
  "Health",
];

function Categories() {
  const [showSportsSheet, setShowSportsSheet] = useState(false);
  const [showAutoPartsSheet, setShowAutoPartsSheet] = useState(false);
  const [showToysSheet, setShowToysSheet] = useState(false);
  const [showGrocerySheet, setShowGrocerySheet] = useState(false);
  const [showHealthSheet, setShowHealthSheet] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 right-0 border-b bg-white z-10 border-gray-200 flex items-center gap-2 px-3 pt-4">
        <button>
          <ArrowLeft size={18} strokeWidth={1.5} />
        </button>

        <h1 className="text-[16px] font-medium text-gray-900">Categories</h1>
      </header>

      {/* ================= MAIN ================= */}
      <main className="px-3 mt-12 pb-20">
        {/* Search */}
        <div className="relative mt-3">
          <Search
            size={15}
            strokeWidth={1.5}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search categories..."
            className="
              h-8
              w-full
              rounded-full
              border
              border-gray-400
              pl-9
              pr-3
              text-[11px]
              text-gray-700
              outline-none
            "
          />
        </div>

        {/* ================= BROWSE CATEGORIES ================= */}
        <section className="mt-3">
          <h2 className="text-[12px] font-semibold text-gray-900">
            Browse Categories
          </h2>

          <div className="mt-3 grid grid-cols-2 gap-3">
            {browseCategories.map((category) => (
              <button
                key={category.name}
                className="
                  flex
                  h-26
                  flex-col
                  items-center
                  justify-center
                  bg-gray-50
                "
              >
                <img
                  // src={category.image}
                  alt={category.name}
                  className="h-12 w-12 object-contain"
                />

                <span className="mt-2 text-[10px] text-gray-700">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* ================= ALL CATEGORIES ================= */}
        <section className="mt-4">
          <h2 className="mb-1 text-[12px] font-semibold text-left text-gray-900">
            All Categories
          </h2>

          <div className="border-t border-gray-200">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  if (category === "Sports & Fitness") {
                    setShowSportsSheet(true);
                  } else if (category === "Auto Parts & Accessories") {
                    setShowAutoPartsSheet(true);
                  } else if (category === "Toys & Hobbies") {
                    setShowToysSheet(true);
                  } else if (category === "Grocery") {
                    setShowGrocerySheet(true);
                  } else if (category === "Health") {
                    setShowHealthSheet(true);
                  } 
                }}
                className="
                  flex
                  h-7
                  w-full
                  items-center
                  justify-between
                  border-b
                  border-gray-100
                  text-left
                  pointer
                "
              >
                <span className="text-[10px] pointer text-gray-600">
                  {category}
                </span>

                <ChevronRight
                  size={14}
                  strokeWidth={1.5}
                  className="text-gray-500"
                />
              </button>
            ))}
          </div>
        </section>
      </main>

      {/* ================= BOTTOM NAVIGATION ================= */}
      <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white">
        <div className="mx-auto flex h-12 max-w-md items-center justify-around">
          <NavItem icon={<Home size={18} />} label="Home" />

          <NavItem
            active
            icon={
              <div className="grid grid-cols-2 gap-0.5">
                <span className="h-1.5 w-1.5 bg-blue-600" />
                <span className="h-1.5 w-1.5 bg-blue-600" />
                <span className="h-1.5 w-1.5 bg-blue-600" />
                <span className="h-1.5 w-1.5 bg-blue-600" />
              </div>
            }
            label="Categories"
          />

          <NavItem icon={<Heart size={18} />} label="Wishlist" />

          <NavItem icon={<ShoppingCart size={18} />} label="Cart" />

          <NavItem icon={<User size={18} />} label="Account" />
        </div>
      </nav>

      {/* ================= SPORTS SHEET ================= */}
      <SportsFitnessSheet
        isOpen={showSportsSheet}
        onClose={() => setShowSportsSheet(false)}
      />
      {/* Add the rest of the categories here */}

    </div>
  );
}

/* ================= NAV ITEM ================= */

type NavItemProps = {
  icon: ReactNode;
  label: string;
  active?: boolean;
};

function NavItem({ icon, label, active = false }: NavItemProps) {
  return (
    <button
      className={`flex flex-col items-center gap-0.5 text-[9px] ${
        active ? "text-blue-600" : "text-gray-500"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default Categories;

import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  { id: "1", name: "Phones", image: "/images/phones.png", href: "/categories/phones", bg: "bg-[#F2F4F7]" },
  { id: "2", name: "Fashion", image: "/images/fashionn.png", href: "/categories/fashion", bg: "bg-[#FDF2F2]" },
  { id: "3", name: "Electronics", image: "/images/electronicss.png", href: "/categories/electronics", bg: "bg-[#F2F4F7]" },
  { id: "4", name: "Beauty", image: "/images/beautyy.png", href: "/categories/beauty", bg: "bg-[#FDF2F2]" },
  { id: "5", name: "Home", image: "/images/homee.png", href: "/categories/home", bg: "bg-[#FEF6EE]" },
];

export function CategoriesSection() {
  return (
    <section className="space-y-4 py-2 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-base">Categories</h2>

        <Link
          href="/categories"
          className=" text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
        >
          See all <span className="text-base">&#x203A;</span>
        </Link>
      </div>

      <div className="grid grid-cols-5 gap-3 sm:gap-4 md:gap-6">
        {CATEGORIES.map((category) => (
          <Link
            key={category.id}
            href={category.href}
            className="flex flex-col items-center gap-2 group"
          >
            <div className={`w-full aspect-square ${category.bg} rounded-2xl p-4 sm:p-6 flex items-center justify-center relative hover:opacity-95 transition-opacity`}>
              <div className="relative w-full h-full">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 1280px) 20vw, 240px"
                  className="object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </div>

            <span className="text-xs sm:text-sm md:text-base font-medium text-slate-800 text-center truncate w-full">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
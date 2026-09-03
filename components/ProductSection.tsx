"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useProductStore, ProductDetails } from "@/store/useProductStore";

type ProductSectionProps = {
  title: string;
  seeAllHref: string;
  products: ProductDetails[];
};

export default function ProductSection({
  title,
  seeAllHref,
  products,
}: ProductSectionProps) {
  const { favorite, toggleFavorite } = useProductStore();

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between px-4 py-2">
        <h2 className="text-sm font-medium text-gray-900">{title}</h2>

        <Link
          href={seeAllHref}
          className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <span>See all</span>
          <Image
            src="/arrow.png"
            width={4}
            height={7}
            alt="arrow"
            className="object-contain"
          />
        </Link>
      </div>

      <div className="flex w-full gap-3 overflow-x-auto p-4">
        {products.map((item) => {
          const isFav = favorite.includes(item.id);

          return (
            <div
              key={item.id}
              className="flex w-40 shrink-0 flex-col rounded-2xl bg-[#F7F8FA] p-3"
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  className="p-1 transition-transform active:scale-90"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(item.id);
                  }}
                >
                  <Heart
                    size={18}
                    className={
                      isFav
                        ? "fill-blue-500 text-blue-500"
                        : "text-blue-400 hover:text-blue-600"
                    }
                  />
                </button>
              </div>

              <div className="-mt-4 flex h-32 w-full items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={90}
                  height={90}
                  className="h-28 w-28 object-contain"
                />
              </div>

              <div className="flex flex-col gap-1 text-left">
                <p className="line-clamp-1 text-sm font-semibold text-gray-800">
                  {item.title}
                </p>

                {item.stars && (
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <span>★</span>
                    <span>{item.stars}</span>
                  </div>
                )}

                {item.amount && (
                  <p className="text-base font-bold text-gray-900">
                    {item.amount}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

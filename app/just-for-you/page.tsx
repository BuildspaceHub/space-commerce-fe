"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft, ShoppingCart, Heart, Search } from "lucide-react";
import { useProductStore } from "@/store/useProductStore";

export default function JustForYouPage() {
  const router = useRouter();
  const { justForYouList, favorite, toggleFavorite } = useProductStore();

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => router.back()}
            className="p-1 text-gray-800 transition-transform active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>

          <h1 className="text-lg font-medium text-gray-900">Just For You</h1>
        </div>

        <button type="button" className="p-1 text-gray-800">
          <ShoppingCart size={22} />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-full border border-black  px-3 py-2.5">
        <Search size={18} className="text-gray-600" />
        <input
          type="text"
          placeholder="Search on Spacecommerce"
          className="w-full bg-transparent text-sm outline-black placeholder:text-gray-600"
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {justForYouList.map((item) => {
          const isFav = favorite.includes(item.id);

          return (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-2xl bg-[#F7F8FA] p-3"
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  className="p-1 transition-transform active:scale-90"
                  onClick={() => toggleFavorite(item.id)}
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

              <div className="-mt-3 flex h-32 w-full items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={90}
                  height={90}
                  className="h-28 w-28 object-contain"
                />
              </div>

              <div className="mt-2 flex flex-col gap-1 text-left">
                <p className="line-clamp-1 text-sm font-semibold text-gray-800">
                  {item.title}
                </p>

                {item.stars && (
                  <div className="flex items-center gap-1 text-xs text-gray-500">
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

              <button
                type="button"
                className="mt-3 w-full rounded-lg bg-blue-600 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-blue-700 active:scale-95"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

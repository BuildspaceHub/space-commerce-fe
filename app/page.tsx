"use client";

import ProductSection from "@/components/ProductSection";
import { useProductStore } from "@/store/useProductStore";

export default function HomePage() {
  const { productList, justForYouList } = useProductStore();

  return (
    <main className="pb-20">
      <ProductSection
        title="Featured Products"
        seeAllHref="/featured-products"
        products={productList}
      />

      <ProductSection
        title="Just For You"
        seeAllHref="/just-for-you"
        products={justForYouList}
      />
    </main>
  );
}

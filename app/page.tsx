import { PromoBanner } from "@/components/promo-banner";
import { CategoriesSection } from "@/components/categories-section";
import { StorePage } from "@/components/store-page";

export default function Home() {
  return (
    <StorePage description="Find your next favorite thing." title="Discover products">
      <div className="space-y-8 py-6">
        <PromoBanner />
        <CategoriesSection />
      </div>
    </StorePage>
  );
}
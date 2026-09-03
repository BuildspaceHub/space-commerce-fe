import { create } from "zustand";

export type ProductDetails = {
  id: number;
  image: string;
  stars?: string;
  title: string;
  amount?: string;
};

interface ProductStore {
  productList: ProductDetails[];
  favorite: number[];
  justForYouList: ProductDetails[];
  toggleFavorite: (id: number) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  productList: [
    {
      id: 1,
      image: "/iphone.png",
      title: "iPhone 14 Pro",
      stars: "4.8 (230)",
      amount: "$670",
    },
    {
      id: 2,
      image: "/shoe.png",
      title: "Adidas Samba OG",
      stars: "4.5 (120)",
      amount: "$98",
    },
    {
      id: 3,
      image: "/ps5.png",
      title: "Mortal Kombat 11",
      stars: "4.2 (87)",
      amount: "$85",
    },
  ],
  justForYouList: [
    {
      id: 4,
      image: "/airpod.png",
      title: "AirPods Pro",
      stars: "4.9 (450)",
      amount: "$300",
    },
    {
      id: 5,
      image: "/mac.png",
      title: "MacBook Pro M5",
      stars: "4.9 (180)",
      amount: "$1,300",
    },
    {
      id: 6,
      image: "/blen.png",
      title: "NutriBullet Blender",
      stars: "4.6 (95)",
      amount: "$200",
    },
  ],
  favorite: [],
  toggleFavorite: (id) =>
    set((state) => ({
      favorite: state.favorite.includes(id)
        ? state.favorite.filter((itemId) => itemId !== id)
        : [...state.favorite, id],
    })),
}));

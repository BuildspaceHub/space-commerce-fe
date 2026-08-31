import React from "react";
import Image from "next/image";
import BrowseCard from "../components/categories/BrowseCard";
import CategoryList from "../components/categories/CategoryList";
import { RiArrowRightSLine } from "react-icons/ri";
import SearchButton from "../components/categories/SearchButton";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import VarCategoryList from "../components/categories/VarCategoryList";

export default function page() {
  const AllBrowseCards = [
    {
      id: "1",
      name: "Phones",
      imageSrc: "/ForCategories/images/Mobile/Phone.png",
    },
    {
      id: "2",
      name: "Cloth",
      imageSrc: "ForCategories/images/Mobile/Cloth.png",
    },
    { id: "3", name: "TV", imageSrc: "ForCategories/images/Mobile/TV.png" },
    { id: "4", name: "mp3", imageSrc: "ForCategories/images/Mobile/Mp3.png" },
    {
      id: "5",
      name: "Lipstick",
      imageSrc: "ForCategories/images/Mobile/Lipstick.png",
    },
    {
      id: "6",
      name: "Statute",
      imageSrc: "ForCategories/images/Mobile/Statute.png",
    },
  ];

  const AllCategoryList = [
    {
      id: "1",
      name: "Electronics",
      // imageSrc: "/ForCategories/icons/back-arrow.png",
      // rightArrow: <RiArrowRightSLine />,
    },
    {
      id: "2",
      name: "Fashion",
      // imageSrc: "/ForCategories/icons/back-arrow.png",
      // rightArrow: <RiArrowRightSLine />,
    },
    {
      id: "3",
      name: "Health & Safety",
      // imageSrc: "/ForCategories/icons/back-arrow.png",
      // rightArrow: <RiArrowRightSLine />,
    },
    {
      id: "4",
      name: "Home and Garden",
      // imageSrc: "/ForCategories/icons/back-arrow.png",
      // rightArrow: <RiArrowRightSLine />,
    },
    {
      id: "5",
      name: "Collection & Art",
      // imageSrc: "/ForCategories/icons/back-arrow.png",
      // rightArrow: <RiArrowRightSLine />,
    },
    {
      id: "6",
      name: "Toys & Hubbies",
      // imageSrc: "/ForCategories/icons/back-arrow.png",
      // rightArrow: <RiArrowRightSLine />,
    },
    {
      id: "7",
      name: "Sporting Goods",
      // imageSrc: "/ForCategories/icons/back-arrow.png",
      // rightArrow: <RiArrowRightSLine />,
    },
    {
      id: "8",
      name: "Books",
      // imageSrc: "/ForCategories/icons/back-arrow.png",
      // rightArrow: <RiArrowRightSLine />,
    },
    {
      id: "9",
      name: "Jewelry & Watches",
      // imageSrc: "/ForCategories/icons/back-arrow.png",
      // rightArrow: <RiArrowRightSLine />,
    },
    {
      id: "10",
      name: "Baby Essentials",
      // imageSrc: "/ForCategories/icons/back-arrow.png",
      // rightArrow: <RiArrowRightSLine />,
    },
    {
      id: "11",
      name: "Pet Supplies",
      // imageSrc: "/ForCategories/icons/back-arrow.png",
      // rightArrow: <RiArrowRightSLine />,
    },
  ];

  return (
    <div className="md:mx-21 md:mt-8 relative min-h-screen flex flex-col  ">
      {/* Both Headers */}
      <div className="sticky top-0 bg-background z-1">
        {/* Header For Mobile */}
        <div className="sticky grid grid-col-1 mx-4 md:hidden gap-4 top-0 ">
          <header className="sticky top-0 flex gap-3 bg-background w-full pt-2.5">
            <img
              src="ForCategories/icons/back-arrow.png"
              alt="Back arrow"
              width={8}
              height={24}
            />
            <p className="font-poppins text-large font-normal">Categories</p>
          </header>
          <input
            type="text"
            placeholder="Search Categories"
            className="px-10  border border-neutral w-full rounded-full text-text-caption  bg-[url('/ForCategories/icons/Search.png')] bg-size-[16px_16px] bg-no-repeat bg-position-[10px_center] focus:outline-none "
          />
        </div>

        {/* Header For Desktop*/}
        <header className=" sticky items-center top-0 justify-between gap-2 bg-background w-full py-2.5 hidden md:flex border-b border-neutral/40">
          {/* Space-Logo */}
          <div className="flex items-center gap-2.5">
            <img
              src="ForCategories/icons/Space-commerce-Logo.png"
              alt="Space Commerce Logo"
              className="w-14.5 h-14.5 rounded-xl"
            />
            <p className="w-full">Space Commerce</p>
          </div>

          {/* Search by Categories */}
          <div className="flex gap-2 items-center">
            <p className="text-regular w-full">Sort by Categories</p>
            <RiArrowRightSLine className="text-normal rotate-90" />
          </div>

          {/* Search Input */}
          <div className="flex justify-between gap-4 px-3 py-2 mt-4 border border-neutral rounded-full text-text-caption">
            <input
              type="text"
              placeholder="Search for products, brands and Categories..."
              className="w-full pl-8 pr-2 py-2 bg-[url('/ForCategories/icons/Search.png')] bg-size-[16px_16px] bg-no-repeat bg-position-[10px_center] focus:outline-none"
            />
            <SearchButton />
          </div>

          {/* icons */}
          {/* <div className="flex items-center justify-between gap-4 "> */}
          <div className="flex gap-0.5 text-neutral">
            <IoPersonOutline />
            <RiArrowRightSLine className="text-normal rotate-90 " />
          </div>

          <div className="text-neutral">
            <IoMdHeartEmpty />
          </div>
          <div className="text-neutral">
            <IoCartOutline />
          </div>
          {/* </div> */}
        </header>
      </div>

      {/* Little Nav Direction */}
      <div className="hidden md:flex md:text-neutral mt-4">
        <div className="flex gap-0.5 items-center">
          <p>Home</p>
          <div className="text-normal">
            <RiArrowRightSLine />
          </div>
        </div>
        <p>All Categories</p>
      </div>

      <main className=" flex flex-col">
        <p className="text-large md:text-[28px] font-medium md:font-bold md:pb-6 md:pt-4 pt-4 mx-4">
          Browse All Categories
        </p>

        {/* Browse Categories and Category List */}
        {/* Browse Categories */}
        <div className="mx-4 md:mx-0 py-4 md:pt-0 flex flex-col md:justify-between md:w-full md:flex-row-reverse gap-4 md:gap-10 ">
          <div className="md:flex md:flex-col md:gap-10 md:border-l md:border-neutral/50 md:pl-8">
            {/* Subcategory List */}
            <div className="flex flex-col justify-between gap-5 ">
              {/* SubCat Headings */}
              <div className="hidden md:flex md:justify-between md:border-b md:border-neutral/50">
                <h3 className="font-medium text-large ">Electronics</h3>
                <div className="flex justify-between text-brand items-center gap-2">
                  <h3 className="font-medium text-regular ">
                    Explore Electronics
                  </h3>
                  <RiArrowRightSLine className="text-normal" />
                </div>
              </div>

              <ul className="hidden md:grid-cols-3 md:gap-4 md:grid md:list-disc pl-5">
                <li>Cell Phones & Accessories</li>
                <li>Cell Phones & Accessories</li>
                <li>Cell Phones & Accessories</li>
                <li>Cell Phones & Accessories</li>
                <li>Cell Phones & Accessories</li>
                <li>Cell Phones & Accessories</li>
                <li>Cell Phones & Accessories</li>
                <li>Cell Phones & Accessories</li>
                <li>Cell Phones & Accessories</li>
              </ul>
            </div>

            <div className="flex flex-col justify-between gap-5">
              <h3 className="text-regular font-medium md:text-large">Trending Discoveries</h3>
              <div className="grid grid-cols-2 md:grid md:grid-cols-4 gap-6">
                {AllBrowseCards.map((item) => (
                  <BrowseCard
                    key={item.id}
                    name={item.name}
                    imageSrc={item.imageSrc}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Category List */}
          <div className="flex flex-col gap-4">
            <h3 className="border border-t-0 border-x-0 border-neutral/40 py-1.5 md:hidden">
              All Categories
            </h3>
            <div className="grid grid-cols-1 gap-4 justify-between text-neutral">
              {AllCategoryList.map((category) => (
                <CategoryList
                  key={category.id}
                  name={category.name}
                  // rightArrow={category.rightArrow}
                />
              ))}
            </div>
          </div>

          {/* VarCategory List */}

          {/* <div className="grid grid-cols-1 gap-4 justify-between text-neutral">
            {AllCategoryList.map((category) => (
              <VarCategoryList
                key={category.id}
                name={category.name}
              />
            ))}
          </div> */}
        </div>
        {/* </div>  */}
      </main>

      <footer className=" p-30">
        <p className="text-center font-bold text-2xl">Footer</p>
      </footer>
    </div>
  );
}

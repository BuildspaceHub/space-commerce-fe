"use client";
import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import SubcategoryList from "./SubcategoryList";
import Link from "next/link";
import SubcategoriesList from "./SubcategoryList";
import VarCategoryList from "./VarCategoryList";
import SubCategoryPreview from "./SubCategoryPreview";

interface CategoryListProp {
  name: string;
}

export default function CategoryList({ name }: CategoryListProp) {
  const [isOpen, setIsOpen] = useState(false);


  // if (isOpen) {
  //   return <VarCategoryList name={name} isOpen={true} setIsOpen={setIsOpen} />;
  // }

  return (
    <>
      {isOpen ? (
        <VarCategoryList name={name} isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-left relative flex justify-between
             w-full items-center gap-2 md:gap-6  hover:bg-neutral/16 rounded-md py-1 px-4 `}
        >
          <p className="">{name}</p>
          {/* <img src={imageSrc} alt={name} width={8} height={24} className="scale-x-[-1] "/> */}
          <div className="md:hidden">
            <RiArrowRightSLine className="text-normal" />
          </div>

          {/* {isOpen ? "" : ""} */}

        </button>
        // {isOpen && (

        // )}
      )}
    </>
  );
}

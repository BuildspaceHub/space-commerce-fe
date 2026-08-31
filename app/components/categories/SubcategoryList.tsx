"use client";
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

interface SubcategoryListProps {
  // parentCategory: string;
  name: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // imageSrc: Element;
}


export default function SubcategoryList(
  { name, isOpen, setIsOpen }: SubcategoryListProps,
  // {parentCategory}: SubcategoryListProps
) {
if (!isOpen) return null

  return (
    <div className="flex w-full justify-between">
      <p>{name}</p>
      <RiArrowRightSLine className="text-normal" />

      {/* {isOpen && ( */}
     
      {/* )}  */}
    </div>
  );
}

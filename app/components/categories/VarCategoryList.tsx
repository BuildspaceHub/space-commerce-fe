"use client"
import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

interface VarCategoryListProps {
  name: string;
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void
}

export default function ({ name, isOpen, setIsOpen }: VarCategoryListProps) {
  if (!isOpen) return null
  return (
  
    <button
      onClick={() => setIsOpen?.(false)}
      className="relative flex justify-between w-full items-center gap-2 text-brand hover:bg-neutral/16 rounded-md py-1 pl-6 pr-4"
    >
      <div className="flex items-baseline gap-2">
        <p>|</p>
        <p className="text-left">{name}</p>
      </div>
      {/* <img src={imageSrc} alt={name} width={8} height={24} className="scale-x-[-1] "/> */}
      <RiArrowRightSLine className="text-normal rotate-90" />
    </button>
  );
}

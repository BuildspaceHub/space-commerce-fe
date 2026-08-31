import React from "react";
import Image from "next/image";

interface BrowseCardProps {
  name: string;
  imageSrc: string;
}



export default function BrowseCard({name, imageSrc}: BrowseCardProps) {
  return (
      <div className="flex flex-col items-center gap-2 bg-neutral/3 hover:bg-neutral/16 rounded-md p-4 w-42.75 h-32.25]">
        <img
          src={imageSrc}
          alt={name} 
          className="w-19.5 h-19.5"
        />
        <p className="font-poppins text-text-regular">{name}</p>
        
      </div>
  );
}





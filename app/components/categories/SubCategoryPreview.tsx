// import React from 'react'
// import { RiArrowRightSLine } from 'react-icons/ri'
// import BrowseCard from './BrowseCard';

// interface SubCategoryPreviewProp {
//   // isSubCategoryPre: boolean;
//   // setIsSubCategoryPre: (open: boolean) => void
// }

// export default function SubCategoryPreview() {
//   const AllBrowseCards = [
//     {
//       id: "1",
//       name: "Phones",
//       imageSrc: "/ForCategories/images/Mobile/Phone.png",
//     },
//     {
//       id: "2",
//       name: "Cloth",
//       imageSrc: "ForCategories/images/Mobile/Cloth.png",
//     },
//     { id: "3", name: "TV", imageSrc: "ForCategories/images/Mobile/TV.png" },
//     { id: "4", name: "mp3", imageSrc: "ForCategories/images/Mobile/Mp3.png" },
//     {
//       id: "5",
//       name: "Lipstick",
//       imageSrc: "ForCategories/images/Mobile/Lipstick.png",
//     },
//     {
//       id: "6",
//       name: "Statute",
//       imageSrc: "ForCategories/images/Mobile/Statute.png",
//     },
//   ];

//   return (
//     <div className="md:flex md:flex-col md:gap-10 md:border-l md:border-neutral/50 pl-8">
//                 {/* Subcategory List */}
//                 <div className="flex flex-col justify-between gap-5 ">
//                   {/* SubCat Headings */}
//                   <div className="md:flex md:justify-between md:border-b md:border-neutral/50">
//                     <h3 className="font-medium text-large ">Electronics</h3>
//                     <div className="flex justify-between text-brand items-center gap-2">
//                       <h3 className="font-medium text-regular ">
//                         Explore Electronics
//                       </h3>
//                       <RiArrowRightSLine className="text-normal" />
//                     </div>
//                   </div>

//                   <ul className="hidden md:grid-cols-3 md:gap-4 md:grid md:list-disc pl-5">
//                     <li>Cell Phones & Accessories</li>
//                     <li>Cell Phones & Accessories</li>
//                     <li>Cell Phones & Accessories</li>
//                     <li>Cell Phones & Accessories</li>
//                     <li>Cell Phones & Accessories</li>
//                     <li>Cell Phones & Accessories</li>
//                     <li>Cell Phones & Accessories</li>
//                     <li>Cell Phones & Accessories</li>
//                     <li>Cell Phones & Accessories</li>
//                   </ul>
//                 </div>

//                 <div className="flex flex-col justify-between gap-5">
//                   <h3 className="font-medium text-large">Trending Discoveries</h3>
//                   <div className="grid grid-cols-2 md:grid md:grid-cols-4 gap-6">
//                     {AllBrowseCards.map((item) => (
//                       <BrowseCard
//                         key={item.id}
//                         name={item.name}
//                         imageSrc={item.imageSrc}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//   )
// }

"use client";

import React, { Dispatch, SetStateAction } from "react";

interface SubCategoryPreviewProps {
  isSubCategoryPre: boolean;
  setIsSubCategoryPre: Dispatch<SetStateAction<boolean>>;
}

export default function SubCategoryPreview({
  isSubCategoryPre,
  setIsSubCategoryPre,
}: SubCategoryPreviewProps) {
  return (
    <div>
      <button onClick={() => setIsSubCategoryPre(false)}>Back</button>
      <p>SubCategory Content</p>
    </div>
  );
}

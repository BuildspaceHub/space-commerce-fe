// "use client";
// import React, { useState } from "react";
// import CategoryList from "./CategoryList";
// import SubCategoryPreview from "./SubCategoryPreview";

// export interface BrowseCardItem {
//   id: string | number;
//   name: string;
//   imageSrc: string;
//   onClick?: () => void
// }

// interface CategorySectionProp {
//   name: string;
//   allBrowseCards: BrowseCardItem[];
// }

// export default function CategorySection({name, allBrowseCards}: CategorySectionProp) {
//   const [isSubCategoryPre, setIsSubCategoryPre] = useState(false)


//   return <div>
//     <CategoryList name={name} onClick={() => setIsSubCategoryPre(true)}/>
    
//     {isSubCategoryPre? (
//       <SubCategoryPreview
//       isSubCategoryPre={isSubCategoryPre}
//       setIsSubCategoryPre={setIsSubCategoryPre}
//       />
//     ) : ()}
//   </div>;
// }


'use client';

import React, { useState } from 'react';
import CategoryList from './CategoryList';
import SubCategoryPreview from './SubCategoryPreview';
import BrowseCard from './BrowseCard';

export interface BrowseCardItem {
  id: string | number;
  name: string;
  imageSrc: string;
}

interface CategorySectionProp {
  name: string;
  allBrowseCards: BrowseCardItem[];
}

export default function CategorySection({ name, allBrowseCards }: CategorySectionProp) {
  const [isSubCategoryPre, setIsSubCategoryPre] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <CategoryList name={name} onClick={() => setIsSubCategoryPre(true)} />

      {isSubCategoryPre ? (
        <SubCategoryPreview
          isSubCategoryPre={isSubCategoryPre}
          setIsSubCategoryPre={setIsSubCategoryPre}
        />
      ) : (
        <div className="flex flex-col gap-5 md:gap-8">
          <h3 className="font-medium text-regular md:block md:font-medium md:text-large">
            Trending Discoveries
          </h3>
          <div className="grid grid-cols-2 md:grid md:grid-cols-4 gap-6">
            {allBrowseCards.map((item) => (
              <BrowseCard
                key={item.id}
                name={item.name}
                imageSrc={item.imageSrc}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
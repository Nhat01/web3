"use client";

const CategoryItem = ({ catText }) => {
   return (
      <button className="btn bg-white px-[15px] rounded-[5px]">
         {catText}
      </button>
   );
};

export default CategoryItem;

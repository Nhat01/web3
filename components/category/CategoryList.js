import CategoryItem from "./CategoryItem";

const CategoryList = () => {
   const category = ["Art", "Game", "Music"];
   return (
      <>
         <h2 className="font-bold">Trend NFTs</h2>
         <div className="text-[13px] flex gap-4">
            {category?.map((item) => (
               <CategoryItem catText={item} />
            ))}
         </div>
      </>
   );
};

export default CategoryList;

import { use } from "react";
import Category from "./Category";

const Categories = ({ categoriesPromise, handleFoodPromise }) => {
  const categoriesData = use(categoriesPromise);
  const categories = categoriesData.categories;
  return (
    <section className="bg-[#FEBF00] col-span-2 rounded-xl p-3">
      <h1 className="text-xl font-bold text-center bg-white rounded-2xl">
        Cateogries
      </h1>
      <div className="divider" />

      <div
        className="grid grid-cols-1 sticky top-10 gap-3"
        id="category-container"
      >
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            handleFoodPromise={handleFoodPromise}
          ></Category>
        ))}
      </div>
    </section>
  );
};

export default Categories;

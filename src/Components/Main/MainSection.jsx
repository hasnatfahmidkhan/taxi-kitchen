import { Suspense, useState } from "react";
import Categories from "./Categories/Categories";
import Foods from "./Foods/Foods";
import Carts from "./Carts/Carts";
import Spinner from "../Spinners/Spinner";
const categoriesPromise = fetch(
  "https://taxi-kitchen-api.vercel.app/api/v1/categories"
).then((res) => res.json());

const randomFoodsPromise = fetch(
  "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
).then((res) => res.json());

const MainSection = ({ mainSectionRef }) => {
  const [foodPromise, setFoodPromise] = useState(randomFoodsPromise);
  const handleFoodPromise = (id) => {
    const foodPromise = fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`
    ).then((res) => res.json());
    setFoodPromise(foodPromise);
  };

  return (
    <div
      ref={mainSectionRef}
      className="grid grid-cols-12 gap-5 mt-10 w-11/12 mx-auto min-h-screen py-4"
    >
      <Suspense>
        <Categories
          handleFoodPromise={handleFoodPromise}
          categoriesPromise={categoriesPromise}
        ></Categories>
      </Suspense>
      <section className="col-span-7 p-3">
        <h1 className="text-xl font-bold text-center rounded-2xl">Our Foods</h1>
        <div className="divider" />
        <Suspense fallback={<Spinner />}>
          <Foods foodsPromise={foodPromise}></Foods>
        </Suspense>
      </section>

      <Carts></Carts>
    </div>
  );
};

export default MainSection;

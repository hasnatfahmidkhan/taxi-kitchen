import React, { use } from "react";
import Food from "./Food";

const Foods = ({ foodsPromise }) => {
  const foodsData = use(foodsPromise);
  const foods = foodsData.foods;
  return (
    <section className="col-span-7 p-3">
      <h1 className="text-xl font-bold text-center rounded-2xl">Our Foods</h1>
      <div className="divider" />
      <div className="space-y-5" id="food-container">
        {foods.map((food) => (
          <Food key={food.id} food={food}></Food>
        ))}
      </div>
    </section>
  );
};

export default Foods;

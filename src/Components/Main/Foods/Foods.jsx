import { use } from "react";
import Food from "../Food/Food";

const Foods = ({ foodsPromise, handleAddCart }) => {
  const foodsData = use(foodsPromise);
  const foods = foodsData.foods;
  return (
    <div className="space-y-5" id="food-container">
      {foods.map((food) => (
        <Food handleAddCart={handleAddCart} key={food.id} food={food}></Food>
      ))}
    </div>
  );
};

export default Foods;

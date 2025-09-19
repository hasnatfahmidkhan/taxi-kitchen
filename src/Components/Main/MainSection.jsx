import { Suspense, useState } from "react";
import Categories from "./Categories/Categories";
import Foods from "./Foods/Foods";
import Carts from "./Carts/Carts";
import Spinner from "../Spinners/Spinner";

// get categories promise
const categoriesPromise = fetch(
  "https://taxi-kitchen-api.vercel.app/api/v1/categories"
).then((res) => res.json());

// get random foods
const randomFoodsPromise = fetch(
  "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
).then((res) => res.json());

// MainSection component start
const MainSection = ({ mainSectionRef }) => {
  // foodPromise
  const [foodPromise, setFoodPromise] = useState(randomFoodsPromise);
  const [oldFoodDetail, setOldFoodDetail] = useState([]);

  // handle food
  const handleFoodPromise = (id) => {
    const foodPromise = fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`
    ).then((res) => res.json());
    setFoodPromise(foodPromise);
  };

  // get food detail for cart
  const handleAddCart = (newFoodDetail) => {
    const uniqueId = oldFoodDetail.length + 1;
    setOldFoodDetail([...oldFoodDetail, { ...newFoodDetail, uniqueId }]);
    // console.log();
  };

  // get total price
  const totolPrice = oldFoodDetail.reduce(
    (acc, foodDetail) => acc + foodDetail.price,
    0
  );

  // Function to get the remove item from the cart
  const handleRemoveCart = (uniqueId) => {
    // filtered the cart
    // console.log(id);
    const filteredCart = oldFoodDetail.filter(
      (foodDetail) => foodDetail.uniqueId !== uniqueId
    );
    setOldFoodDetail(filteredCart);
  };

  return (
    <div
      ref={mainSectionRef}
      className="grid grid-cols-12 gap-5 mt-10 w-11/12 mx-auto min-h-screen py-4"
    >
      <Categories
        handleFoodPromise={handleFoodPromise}
        categoriesPromise={categoriesPromise}
      ></Categories>
      <section className="col-span-7 p-3">
        <h1 className="text-xl font-bold text-center rounded-2xl">Our Foods</h1>
        <div className="divider" />
        <Suspense fallback={<Spinner />}>
          <Foods
            handleAddCart={handleAddCart}
            foodsPromise={foodPromise}
          ></Foods>
        </Suspense>
      </section>

      <Carts
        handleRemoveCart={handleRemoveCart}
        totolPrice={totolPrice}
        oldFoodDetail={oldFoodDetail}
      ></Carts>
    </div>
  );
};

export default MainSection;

import React from "react";

const Cart = ({ oldFoodDetail }) => {
  console.log(oldFoodDetail);
  return (
    <>
      {oldFoodDetail.map((foodDetail) => (
        <div
          key={foodDetail.id}
          className="p-1 bg-white flex gap-3 shadow rounded-xl relative"
        >
          <div className="img">
            <img
              src={foodDetail.foodImg}
              alt=""
              className="w-[50px] rounded-xl h-[50px] object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-xs font-bold">{foodDetail.title}</h1>
            <div className="">
              <h2 className="text-yellow-600 font-semibold">
                $ <span className="price">{foodDetail.price}</span> BDT
              </h2>
            </div>
          </div>
          <div className="w-6 h-6 flex justify-center items-center bg-red-600 rounded-full absolute -top-1 -right-1 text-white">
            <i className="fa-solid fa-xmark" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;

import React from "react";

const Cart = () => {
  return (
    <div className="p-1 bg-white flex gap-3 shadow rounded-xl relative">
      <div className="img">
        <img
          src="https://www.themealdb.com/images/media/meals/1520081754.jpg"
          alt=""
          className="w-[50px] rounded-xl h-[50px] object-cover"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-xs font-bold">Roast fennel and aubergine paella</h1>
        <div className="">
          <h2 className="text-yellow-600 font-semibold">
            $ <span className="price">560</span> BDT
          </h2>
        </div>
      </div>
      <div className="w-6 h-6 flex justify-center items-center bg-red-600 rounded-full absolute -top-1 -right-1 text-white">
        <i className="fa-solid fa-xmark" />
      </div>
    </div>
  );
};

export default Cart;

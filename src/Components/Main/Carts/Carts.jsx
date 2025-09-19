import React from "react";
import Cart from "../Cart/Cart";
import Total from "../Total/Total";

const Carts = ({ oldFoodDetail }) => {
  return (
    <section className="col-span-3 p-3 bg-white border-[#FEBF00] border-2 rounded-xl">
      <h1 className="text-xl font-bold text-center rounded-2xl">Cart</h1>
      <div className="divider" />
      <div className="sticky top-5">
        <div className="space-y-4" id="cart-container">
          <Cart oldFoodDetail={oldFoodDetail}></Cart>
        </div>
        <div className="">
          <Total></Total>
        </div>
      </div>
    </section>
  );
};

export default Carts;

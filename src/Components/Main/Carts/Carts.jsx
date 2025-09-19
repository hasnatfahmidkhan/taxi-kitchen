import React from "react";
import Cart from "../Cart/Cart";
import Total from "../Total/Total";

const Carts = () => {
  return (
    <section className="col-span-3 p-3 bg-white border-[#FEBF00] border-2 rounded-xl">
      <h1 className="text-xl font-bold text-center rounded-2xl">Cart</h1>
      <div className="divider" />
      <div className="sticky top-10" id="cart-container">
        <Cart></Cart>
      </div>
      <div className="sticky top-35">
        <Total></Total>
      </div>
    </section>
  );
};

export default Carts;

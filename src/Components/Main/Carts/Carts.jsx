import Cart from "../Cart/Cart";
import Total from "../Total/Total";

const Carts = ({ oldFoodDetail, totolPrice, handleRemoveCart }) => {
  return (
    <section className="col-span-3 p-3 bg-white border-[#FEBF00] border-2 rounded-xl">
      <h1 className="text-xl font-bold text-center rounded-2xl">Cart</h1>
      <div className="divider" />
      <div className="space-y-4" id="cart-container">
        <Cart handleRemoveCart={handleRemoveCart} oldFoodDetail={oldFoodDetail}></Cart>
      </div>
      <div className="">
        <Total totolPrice={totolPrice}></Total>
      </div>
    </section>
  );
};

export default Carts;

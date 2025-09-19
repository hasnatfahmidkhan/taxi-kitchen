import React from "react";

const Cart = ({
  oldFoodDetail,
  handleRemoveCart,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}) => {
  return (
    <>
      {oldFoodDetail.map((foodDetail) => (
        <div
          key={foodDetail.uniqueId}
          className="p-1 bg-white flex gap-3 shadow rounded-xl relative py-2"
        >
          <div className="img">
            <img
              src={foodDetail.foodImg}
              alt=""
              className="w-[50px] rounded-xl h-[50px] object-cover"
            />
          </div>
          <div className="flex-1 space-y-2">
            <h1 className="text-sm font-bold">{foodDetail.title}</h1>
            <div className="flex justify-between items-center pr-2">
              <div className="space-y-1">
                <h2 className="text-yellow-600 font-semibold">
                  $ <span className="price">{foodDetail.price}</span> BDT
                </h2>
                <div className="flex gap-4 pl-0.5">
                  <div
                    onClick={() => handleDecreaseQuantity(foodDetail)}
                    className="w-5 h-5 flex justify-center items-center cursor-pointer active:scale-95 bg-red-500 rounded-full text-white"
                  >
                    <i className="fa-solid fa-minus text-xs"></i>
                  </div>

                  <div
                    onClick={() => handleIncreaseQuantity(foodDetail)}
                    className="w-5 h-5 flex justify-center items-center cursor-pointer active:scale-95 bg-green-500 rounded-full text-white"
                  >
                    <i className="fa-solid fa-plus text-xs"></i>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Quantity: {foodDetail.quantity}
              </p>
            </div>
          </div>
          <div
            onClick={() => handleRemoveCart(foodDetail.uniqueId)}
            className="w-6 h-6 flex justify-center items-center cursor-pointer active:scale-95 bg-red-500 rounded-full absolute -top-1 -right-1 text-white"
          >
            <i className="fa-solid fa-xmark text-xs" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;

import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context/context";

function CartTile({singleCartItem}) {
  const { handleRemoveFromCart, handleAddtoCart } = useContext(ShoppingCartContext);
  return (
    <div className="grid grid-cols-3 items-start gap-5">
      <div className="col-span-2 flex items-start gap-4">
        <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
          <img
            src={singleCartItem?.thumbnail}
            // alt={singleCartItem?.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-base">
            {singleCartItem?.title}
          </h3>
          <button
            onClick={() => {
              handleRemoveFromCart(singleCartItem, true);
            }}
            className="text-sm px-4 py-3 bg-black text-white font-bold rounded-xl"
          >
            Remove{" "}
          </button>
        </div>
      </div>
      <div className="ml-auto">
        <h3 className="text-lg font-bold text-gray-900">
        ${singleCartItem?.totalPrice ? singleCartItem.totalPrice.toFixed(2) : '0.00'}
        </h3>
        <p className="mt-2 mb-3 font-bolf text-[16px]">
          Quantity: {singleCartItem?.quantity}
        </p>
        <div className="mt-3">
          <button
            onClick={() => handleRemoveFromCart(singleCartItem, false)}
            className="disabled:opacity-60 border border-[#000] px-2 font-bold rounded-lg mr-3"
            disabled={singleCartItem?.quantity === 1}
          >
            -
          </button>
          <button
            onClick={() => handleAddtoCart(singleCartItem)}
            className="border border-[#000] px-2 font-bold rounded-lg mr-3"
          >
            +
          </button>
        </div>
      </div>
      <hr className="border-gray-500" />
    </div>
  );
}

export default CartTile;

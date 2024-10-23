import React from "react";
import { useNavigate } from "react-router-dom";

function Producttile({ singleproducttile }) {
  const navigate = useNavigate();

  // const { cartItems } = useContext(ShoppingCartContext);

  function handleNavigateToProductDetailsPage(id) {
    // console.log(id);
    navigate(`/product-details/:${id}`);
  }

  // function handleAddtoCart(tile) {
  //   console.log(tile);
    
  // }

  return (
    <div
      className="relative group border border-cyan-600 p-7 cursor-pointer overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:border-cyan-950"
      onClick={() => {
        handleNavigateToProductDetailsPage(singleproducttile?.id);
      }}
    >
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          src={singleproducttile?.thumbnail}
          alt={singleproducttile?.id || "Product Image"}
          className="transition-all duration-300 w-full h-full object-cover group-hover:scale-105"
        />
      </div>

      <div className="flex items-start justify-between mt-4 space-x-4">
        <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
          <p className="w-[100px] overflow-hidden text-ellipses whitespace-nowrap">
            {singleproducttile?.title}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">
            ${singleproducttile?.price}
          </p>
        </div>
      </div>

      {/* <button
        className="disabled:opacity-65 px-5 mt-5 w-full py-2 rounded-2xl bg-black text-white font-bold text-lg hover:scale-105"
        onClick={() => handleAddtoCart(singleproducttile)}
      >
        Add to Cart
      </button> */}
    </div>
  );
}

export default Producttile;

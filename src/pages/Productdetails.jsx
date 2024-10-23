import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCartContext } from "../context/context";

function ProductDetails() {
  const { id } = useParams(); // Get the product id from the URL

  const cleanedId = id.replace(":", "");
  const [quantity, setQuantity] = useState(0)

  const {
    productDetails,
    setProductDetails,
    loading,
    setLoading,
    handleAddtoCart,
  } = useContext(ShoppingCartContext); // Use context for state management

  const navigate = useNavigate();

  async function fetchProductDetails() {
    setLoading(true); // Set loading to true before fetching
    try {
      const apiResponse = await fetch(
        `https://dummyjson.com/products/${cleanedId}`
      );
      const result = await apiResponse.json();

      if (result) {
        // console.log(result);
        setProductDetails(result);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [cleanedId]);

  if (loading) return <h1>Loading Product Details...</h1>;

  if (!productDetails) return <h1>No Product Details Available</h1>; // Handle null productDetails

  return (
    <div className="antialiased">
      <div className="bg-white shadow-sm sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
          <div className="flex items-center justify-between md:justify-start">
            <button
              type="button"
              className="md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center"
            >
              <svg
                className="text-gray-500 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="relative md:hidden">
            <input
              type="search"
              className="mt-1 w-full pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
              placeholder="Search"
            />

            <svg
              className="h-6 w-6 text-gray-300 ml-2 mt-3 stroke-current absolute top-0 left-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                <img
                  src={productDetails.thumbnail} // Use the fetched product image
                  alt={productDetails.title || "Product Image"} // Corrected alt text
                  className="h-64 md:h-80 object-cover rounded-lg"
                />
              </div>

              <div className="flex -mx-2 mb-4">
                {/* Display product's additional images if available */}
                {productDetails.images &&
                  productDetails.images.map((image, index) => (
                    <div key={index} className="flex-1 px-2">
                      {/* <img
                        src={image}
                        alt={`Product Image ${index}`} // Corrected alt text
                        className="w-full rounded-lg h-24 md:h-32 object-cover cursor-pointer"
                        onClick={() => setProductDetails(prev => ({ ...prev, thumbnail: image }))} // Optional: click to view the clicked image
                      /> */}
                    </div>
                  ))}
              </div>
            </div>

            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {productDetails.title}
              </h2>
              <p className="text-gray-500 text-sm">
                By{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  {productDetails.brand || "ABC Company"}
                </a>
              </p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-indigo-400 mr-1 mt-1">$</span>
                    <span className="font-bold text-indigo-600 text-3xl">
                      {productDetails.price}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">
                    Save {productDetails.discountPercentage}%
                  </p>
                  <p className="text-gray-400 text-sm">
                    Inclusive of all Taxes.
                  </p>
                </div>
              </div>

              <p className="text-gray-500">{productDetails.description}</p>

              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Qty
                  </div>
                  <select
                    className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1"
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>

                  <svg
                    className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>

                <button
                  type="button"
                  className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                  onClick={() => handleAddtoCart(productDetails, quantity)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

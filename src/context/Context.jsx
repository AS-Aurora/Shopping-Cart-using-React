import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [listofProducts, setList] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();

    if (result && result?.products) {
      setList(result?.products);
      setLoading(true);
    }
  }

  function handleAddtoCart(getProductDetails, selectedQuantity = 1) {
    let cpyExistingCartItems = [...cartItems];
    const findIndexOfCurrentItem = cpyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === getProductDetails.id
    );

    if (findIndexOfCurrentItem === -1) {
      cpyExistingCartItems.push({
        ...getProductDetails,
        quantity: selectedQuantity,
        totalPrice: getProductDetails?.price * selectedQuantity,
      });
    } else {
      const existingItem = cpyExistingCartItems[findIndexOfCurrentItem];
      const newQuantity = existingItem.quantity + selectedQuantity;

      cpyExistingCartItems[findIndexOfCurrentItem] = {
        ...existingItem,
        quantity: newQuantity,
        totalPrice: newQuantity * existingItem.price,
      };
    }
    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
    setCartItems(cpyExistingCartItems);
    navigate("/cart");
  }

  function handleRemoveFromCart(singleCartItem, isFullyRemoveFromCart) {
    let cpyExistingCartItems = [...cartItems];
    const findIndexOfCurrentItem = cpyExistingCartItems.findIndex(
      (cartItem) => cartItem.id === singleCartItem.id
    );

    if (isFullyRemoveFromCart) {
      cpyExistingCartItems.splice(findIndexOfCurrentItem, 1);
    } else {
      const existingItem = cpyExistingCartItems[findIndexOfCurrentItem];

      if (existingItem.quantity > 1) {
        const newQuantity = existingItem.quantity - 1;
        cpyExistingCartItems[findIndexOfCurrentItem] = {
          ...existingItem,
          quantity: newQuantity,
          totalPrice: newQuantity * existingItem.price,
        };
      }
    }

    localStorage.setItem("cartItems", JSON.stringify(cpyExistingCartItems));
    setCartItems(cpyExistingCartItems);
  }

  useEffect(() => {
    fetchProducts();

    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  return (
    <ShoppingCartContext.Provider
      value={{
        listofProducts,
        loading,
        productDetails,
        setProductDetails,
        setLoading,
        handleAddtoCart,
        cartItems,
        handleRemoveFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartProvider;

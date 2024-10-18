import { createContext, useEffect, useState } from "react"

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({children}) {

    const [loading, setLoading] = useState(false);
  const [listofProducts, setList] = useState([]);

  async function fetchProducts() {
    const response = await fetch('https://dummyjson.com/products')
    const result = await response.json()
    // console.log(result);

    if(result && result?.products) {
        setList(result?.products)
        setLoading(true);

    }
  }

  useEffect(()=> {
    fetchProducts();
  }, [])
  console.log(listofProducts)

        return (
            <ShoppingCartContext.Provider value={{listofProducts, loading}}>{children}</ShoppingCartContext.Provider>
        )

}

export default ShoppingCartProvider
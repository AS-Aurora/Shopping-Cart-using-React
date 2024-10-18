import React, { useCallback, useContext } from 'react'
import { ShoppingCartContext } from '../context/context'
import Producttile from './components/Producttile';

function Productlist() {

  const {listofProducts, loading} = useContext(ShoppingCartContext)
  console.log(listofProducts);
  
  if(!loading) return <h1>Loading...</h1>

  return (
    <section className='py-12 bg-white sm:py-16 lg:py-20'>
      <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className='max-w-md mx-auto text-center'>
          <h2 className='text-3xl font-extralight text-gray-950 sm:text-4xl'>
            Our featured products
          </h2>

        </div>
        <div className='grid grid-cols-4 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4'>
        {listofProducts && listofProducts.length > 0 ? (
            listofProducts.map((singleproducttile) => (
              <Producttile key={singleproducttile.id} singleproducttile={singleproducttile} />
            ))
          ) : (
            <h3>No Products Found</h3>
          )}

        </div>

      </div>

    </section>
  )
}

export default Productlist

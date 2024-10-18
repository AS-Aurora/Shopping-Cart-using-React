import React from 'react'

function Producttile({singleproducttile}) {

  if(!singleproducttile) return null  


  return (
    <div className='relative group border border-cyan-700 p-10 cursor-pointer overflow-hidden transition-transform duration-300 transform hover:scale-105 '>
      <div className='overflow-hidden aspect-w-1 aspect-h-1'>
      <img
          src={singleproducttile.thumbnail}
          alt={singleproducttile.id || 'Product Image'}
          className='transition-all duration-300 w-full h-full object-cover group-hover:scale-150'
        />

      </div>

      {/* Product Basic Info */}
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{singleproducttile.title}</h3>
      </div>

      {/* Detailed Info (Initially hidden, shown on hover) */}
      <div className="absolute inset-0 p-4 bg-white bg-opacity-90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-lg font-semibold mb-2">{singleproducttile.title}</h3>
        <p className="text-gray-600">{singleproducttile.description}</p>
        <p className="text-lg font-bold mt-2">${singleproducttile.price}</p>
      </div>
    </div>
  )
}

export default Producttile

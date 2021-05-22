import React from 'react'
import Product from "../../Components/products/Product"
import BasketBall from "../../Assets/Basketball.gif"
import "./home_Page.css"

function HomePage({products,loading,error}) {
    return (
        <div>
          <h1 className="mt-20 mb-4 product-list-heading pr-6 py-4 rounded-lg">Products List - </h1>
          <div className="row center">
           {
             !products.length  ? loading ? <h1 className="flex items-center justify-start">
             <img className="mr-2" src={BasketBall} alt="loading" />
             <span className="font-black">Loading...</span></h1>
              : 
              <h1 className="opacity-60 bg-red-200 text-red-600 rounded-lg px-24 py-4 text-center">{error}😫</h1> 
              : products.map(item => {
               return  <Product key={item.id} {...item}  />
             })
           }
          </div>
        </div>
    )
}

export default HomePage

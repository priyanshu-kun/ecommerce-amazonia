import React from 'react'
import Product from "../../Components/products/Product"
import "./home_Page.css"

function HomePage({Seed,isEmpty}) {
    return (
        <div>
          <h1 className="mt-20 mb-4 product-list-heading pr-6 py-4 rounded-lg">Products List - </h1>
          <div class="row center">
           {
             !Seed.length  ? !isEmpty ? <h1>Loading...</h1> : <h1>Empty response from server😫</h1> : Seed.map(item => {
               return  <Product key={item.id} {...item}  />
             })
           }
          </div>
        </div>
    )
}

export default HomePage

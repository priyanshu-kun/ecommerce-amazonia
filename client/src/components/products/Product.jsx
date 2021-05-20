import React from 'react'
import Rating from "../rating/Rating"
import {Link} from "react-router-dom"
import "./product.css"

function Product({id,title,price,description,image,rating,reviews}) {
    return (
        <div className="rounded-lg card">
           <div className="h-3/4 overflow-hidden flex justify-center items-center ">
              <Link to={`/products/${id}`}>
                 <img className="transform scale-50" src={image} alt={title} />
              </Link>
           </div>
           <hr /> 
            <div className="h-48  flex flex-col justify-center">
              <Link to={`/products/${id}`}>
                <h2 className="text-gray-800 my-2 px-5 text-center c-title">{
                  title.length > 40 ? title = title.substring(0,40)+"..." : title
                }</h2>
              </Link>
                <div className="w-full py-4 flex justify-around items-center">
                    <Rating rating={rating} reviews={reviews} />
                    <div className="font-black price text-green-500">${price}</div>
                </div>
            </div>
        </div>
    )
}

export default Product

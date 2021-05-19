import React from 'react'
import Rating from "../rating/Rating"
import "./product.css"

function Product({id,title,price,description,image,rating,reviews}) {
    return (
        <div class="card">
            <a href={`/product/${id}`}>
              <img className="medium" src={image} alt={title} />
            </a>
            <div className="card-body">
              <a href={`/product/${id}`}>
                <h2>{title}</h2>
              </a>
              <small >{description}</small>
                <Rating rating={rating} reviews={reviews} />
              <div className="price">${price}</div>
            </div>
        </div>
    )
}

export default Product

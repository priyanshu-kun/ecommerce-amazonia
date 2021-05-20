import React from 'react'
import Rating from "../../Components/rating/Rating"

function ProductsPage({Seed,history, match: {params: {id} } } ) {
    const product = Seed.find(item => item.id === parseInt(id,10))
    if(!product) {
        return <h1>Product not found</h1>
    }
    return (
        <div>
            <div className="row grid grid-cols-3">
                <div className="col-2">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.title}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} reviews={product.reviews} />
                        </li>
                        <li>
                            Price: ${product.price}
                        </li>
                        <li>
                            Description: {product.description}
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <h1>Price</h1>
                                    <div className="price">{product.price}</div>
                                </div>
                            </li>
                            <li>
                            <div className="row">
                                    <h1>Status</h1>
                                    <div className="status">
                                        {
                                        product.stock > 0 ? (
                                        <span className="success">In stocks</span>
                                            ): (
                                        <span className="failure">Out of stocks</span>
                                        )
                                        }
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button>Add to Cart</button>
                                <button>Buy Now</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsPage

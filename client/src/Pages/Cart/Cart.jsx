import React, { useEffect,useState } from 'react'
import {Link} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import MessageBox from "./MessageBox"
import { addToCart, deleteToCart } from '../../Actions/cart.action'
import "./cart.css"



function Cart({history,location:{search},match:{params:{id}}}) {

    const cart_Qty = search ? Number(search.split("=")[1]) : 1
    const dispatch = useDispatch()
    const _cart = useSelector(state => state.cartReducer)
    const {cart} = _cart

    useEffect(() => {
        if(id) {
            dispatch(addToCart(id,cart_Qty))
        }
    }, [dispatch,id,cart_Qty])

  

    const removeFromCart = (product) => {
        dispatch(deleteToCart(product))
    }

    const checkoutHandler = () => {
        history.push(`/shipping`)
    }

    return (
        <div className="w-full flex justify-between mt-28">
            <div className="w-4/6">
                <h1 className="cart-heading text-5xl mb-8">Shopping Cart</h1>
                {
                 !cart.length ? (
                    <MessageBox>
                        Your Cart is empty <Link 
                        className="text-green-700 underline ml-2" to="/">Go back to home page</Link>
                    </MessageBox>
                 )
                 :
                 (
                    <ul >
                        {
                             cart.map(({title,image,product,qty,price,stock}) => {
                             
                                return (
                                    <li key={product} >
                                        <div className="flex item-card items-center py-6 px-6 justify-between">
                                            <div className="flex items-center w-3/6">
                                                <div className="pr-12">
                                                    <img className="block w-20" src={image} alt={title} />
                                                </div>
                                                <div>
                                                    <Link 
                                                    className="text-black opacity-60" to={`/products/${product}`}>
                                                        {title}
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="flex items-center w-3/6 justify-between px-12">
                                                <div>
                                                   <select 
                                                   className="border px-2 text-lg py-3 rounded-lg" 
                                                   value={qty} onChange={(e) => {
                                                       dispatch(addToCart(product,Number(e.target.value)))
                                                       history.push("/cart")
                                                      
                                                   }} name="qty" id="qty">
                                                       {
                                                           [...Array(stock).keys()].map(i => {
                                                               return (
                                                                <option key={i+1} value={i+1}>
                                                                    {i+1}
                                                                </option>
                                                               )
                                                           })
                                                       }
                                                   </select>
                                                </div>
                                                <div className="text-2xl text-green-500 font-black">${price}</div>
                                                <div>
                                                    <button 
                                                    className="w-full px-5 py-3 border 
                                                    border-red-500 text-red-500 rounded-xl
                                                     transition duration-200 hover:bg-red-500
                                                      hover:text-white " onClick={() => {
                                                        removeFromCart(product)
                                                    }}>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                 )
             }
            </div>
            <div className="card-body p-8 rounded-xl w-1/3 max-h-96 mt-32">
                <h1 className="text-black cart-heading">Grand total</h1>
                <hr />
                <div className="mt-4 flex w-full justify-between items-center">
                    <h1 className="text-2xl opacity-60" >Items Quantity</h1>
                    <h3 className=" text-2xl opacity-60">{cart.reduce((a,c) => a+c.qty,0)}</h3>
                </div>
                <ul>
                    <li>
                        <div className="flex w-full justify-between items-center">
                            <h1 className="text-2xl opacity-60">Total Price</h1>
                            <div 
                            className="price text-3xl text-green-500">
                                ${Math.round(cart.reduce((a,c) => a+c.price*c.qty,0) * 100) / 100}
                            </div>
                        </div>
                    </li>
                    <li className="mt-8 product-page-btn">
                       {
                           cart.length ?  <button 
                           onClick={() => {
                               checkoutHandler()
                           }} 
                           className="
                               text-white bg-green-500 w-full 
                               flex justify-center items-center 
                               py-6 rounded-xl mb-3 transition 
                               duration-200 hover:bg-green-600">
                                       Proceed to checkout</button>:<></>
                       }
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Cart

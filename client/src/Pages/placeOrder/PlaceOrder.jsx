import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import "./placeOrder.css"
import CheckoutStep from "../../Components/checkoutStep/CheckoutStep"
import { Link } from 'react-router-dom'
import { createOrder } from '../../Actions/order.action'
import { ORDER_CREATE_RESET } from '../../Constants/constants'
import circles from "../../Assets/Circles-menu-3.gif"

function PlaceOrder({ history }) {

    const _cart = useSelector(state => state.cartReducer)
    const { shippingAddress, cart, paymentMethod } = _cart
    const dispatch = useDispatch();

    const toPrice = (num) => Number(num.toFixed(2)) // round float number to it's two decimal points
    _cart.itemPrice = toPrice(cart.reduce((accum, curr) => accum + curr.qty * curr.price, 0))
    _cart.shippingPrice = _cart.itemPrice > 100 ? toPrice(0) : toPrice(10)
    _cart.taxPrice = toPrice(0.15 * _cart.itemPrice)
    _cart.totalPrice = _cart.itemPrice + _cart.shippingPrice + _cart.taxPrice

    const orderCreate = useSelector(state => state.orderCreate);
    const {error,success,loading,order} = orderCreate;

    const handlePlaceOrder = () => {
        // handle place order action
        dispatch(createOrder({..._cart,orderItems: _cart.cart}))
    }

    useEffect(() => {
        if (paymentMethod && Object.keys(paymentMethod).length === 0 && paymentMethod.constructor === Object) {
            history.push("/payment")
        }
        if(success) {
            history.push(`/orderDetails/${order._id}`)
            dispatch({
                type: ORDER_CREATE_RESET
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [success,order,dispatch])

    return (
        <div>
            <CheckoutStep step1 step2 step3 step4 />
            <div className="list-container mt-16">
                <div className="left p-8 rounded-xl">
                    <div>
                        <h1 className="placeOrder-heading text-5xl">Shipping</h1>
                        <hr className="my-8" />
                        <div className="my-6">
                            <p className="mb-1"><strong className="font-black mr-2">Name: </strong> <span className="text-gray-600">{shippingAddress.fullName}</span></p>
                            <p className="mb-1"><strong className="font-black mr-2">Address: </strong> <span className="text-gray-600">{shippingAddress.address},
                                {shippingAddress.city},
                                {shippingAddress.postalCode}, {shippingAddress.country}</span></p>
                            <p className="mb-1"><strong className="font-black mr-2">Phone Number: </strong> <span className="text-gray-600">{shippingAddress.phoneNumber}</span></p>
                        </div>
                    </div>
                    <hr />
                    <div className="mb-6">
                        <h1 className="placeOrder-heading text-3xl">Payment</h1>
                        <div >
                            <p><strong className="font-black">Method</strong>: <span className="text-gray-600">{paymentMethod}</span></p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h1 className="placeOrder-heading text-3xl">Order Items</h1>
                        <div>
                            <ul >
                                {
                                    cart.map(({ title, image, product, qty, price, stock }) => {

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
                                                        <div className="text-2xl text-green-500 font-black">${price}</div>
                                                        <div className="text-2xl text-green-500 font-black"><span className="text-black">{qty} x ${price} =</span> ${qty * price}</div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="right"> */}
                    <div className="card-body right p-8 rounded-xl">
                        <h1 className="text-black cart-heading">Order Summery</h1>
                        <hr />
                        <ul>
                            <li>
                                <div className="flex w-full justify-between items-center -my-2">
                                    <h1 className="text-2xl opacity-60">Items Price</h1>
                                    <div
                                        className="price text-2xl text-green-500">
                                        ${_cart.itemPrice}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex w-full justify-between items-center -my-2">
                                    <h1 className="text-2xl opacity-60">Shipping</h1>
                                    <div
                                        className="price text-2xl text-green-500">
                                        ${_cart.shippingPrice}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex w-full justify-between items-center -my-2">
                                    <h1 className="text-2xl opacity-60">Tax</h1>
                                    <div
                                        className="price text-2xl text-green-500">
                                        ${_cart.taxPrice}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex w-full justify-between items-center -my-2">
                                    <h1 className="text-2xl opacity-60">Order Total</h1>
                                    <div
                                        className="price text-2xl text-green-500">
                                        ${_cart.totalPrice.toFixed(2)}
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <button onClick={handlePlaceOrder}
                         className="text-white bg-green-500 w-full 
                               flex justify-center items-center 
                               py-6 rounded-xl mt-10 transition 
                               duration-200 hover:bg-green-600">Place Order</button>
                            {
                                loading && <img src={circles} alt="preloader" />
                            }
                            {
                                error && <h1>{error.message}</h1>
                            }
                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default PlaceOrder

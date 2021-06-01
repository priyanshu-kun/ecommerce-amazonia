import React, { useEffect } from 'react'
import "./orderDetails.css"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsOrder } from '../../Actions/order.action';
import Preloader from '../../Components/preloader/Preloader';

function OrderDetails({match:{params:{id}}}) {
   
    const {loading,error,order} = useSelector(state => state.orderDetails)
    const dispatch = useDispatch();

    // console.log("ORDER: ",order?.shippingAddress,error,loading)

    useEffect(() => {
        dispatch(detailsOrder(id))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return loading ? <Preloader />: error ? <h1>{error.message}</h1>: (
        <div>
            <h1 className="placeOrder-heading -mb-8 mt-4 opacity-60">ORDER ID: {order._id}</h1>
            <div className="list-container mt-16">
                <div className="left p-8 rounded-xl">
                    <div>
                        <h1 className="placeOrder-heading text-5xl">Shipping</h1>
                        <hr className="my-8" />
                        <div className="my-6">
                            <p className="mb-2"><strong className="font-black mr-2">Name: </strong> <span className="text-gray-600">{order?.shippingAddress?.fullName}</span></p>
                            <p className="mb-2"><strong className="font-black mr-2">Address: </strong> <span className="text-gray-600">{order?.shippingAddress?.address},
                                {order?.shippingAddress?.city},
                                {order?.shippingAddress?.postalCode}, {order?.shippingAddress?.country}</span></p>
                            <p className="mb-2"><strong className="font-black mr-2">Phone Number: </strong> <span className="text-gray-600">{order?.shippingAddress?.phoneNumber}</span></p>
                        </div>
                        {
                            order?.isDelivered ? <h1 className="text-xl py-2 pl-6 rounded-lg bg-green-100 text-green-600 mb-4">Delivered At {order?.DeliveredAt}</h1> : <h1 className="text-xl py-2 pl-6 rounded-lg bg-red-100 text-red-600 mb-4">Not yet Delivered</h1>
                        }
                    </div>
                    <hr />
                    <div className="mb-6">
                        <h1 className="placeOrder-heading text-3xl mb-3">Payment</h1>
                        <div >
                            <p><strong className="font-black">Method</strong>: <span className="text-gray-600">{order?.paymentMethod}</span></p>
                        </div>
                        {
                            order?.isPaid ? <h1 className="text-xl py-2 pl-6 rounded-lg bg-green-100 text-green-600 mb-4 mt-4">Delivered At {order?.paidAt}</h1> : <h1 className="text-xl py-2 pl-6 rounded-lg bg-red-100 text-red-600 mb-4 mt-4">Not yet Delivered</h1>
                        }
                    </div>
                    <hr />
                    <div>
                        <h1 className="placeOrder-heading text-3xl">Order Items</h1>
                        <div>
                            <ul >
                                {
                                    order?.orderItems?.map(({ title, image, product, qty, price }) => {

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
                    <div className="card-body right  p-8 rounded-xl">
                        <h1 className="text-black cart-heading">Order Summery</h1>
                        <hr />
                        <ul>
                            <li>
                                <div className="flex w-full justify-between items-center -my-2">
                                    <h1 className="text-2xl opacity-60">Items Price</h1>
                                    <div
                                        className="price text-2xl text-green-500">
                                        ${order?.itemPrice}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex w-full justify-between items-center -my-2">
                                    <h1 className="text-2xl opacity-60">Shipping</h1>
                                    <div
                                        className="price text-2xl text-green-500">
                                        ${order?.shippingPrice}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex w-full justify-between items-center -my-2">
                                    <h1 className="text-2xl opacity-60">Tax</h1>
                                    <div
                                        className="price text-2xl text-green-500">
                                        ${order?.taxPrice}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex w-full justify-between items-center -my-2">
                                    <h1 className="text-2xl opacity-60">Order Total</h1>
                                    <div
                                        className="price text-2xl text-green-500">
                                        ${order?.totalPrice}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default OrderDetails

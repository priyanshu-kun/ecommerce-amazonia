import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import circles from "../../Assets/Circles-menu-3.gif"
import { MyOrdersList } from "../../Actions/order.action"
import MessageBox from "../../Components/MessageBox"
import "./orderHistory.css"
import { Link } from 'react-router-dom'

function OrderHistory({ history }) {
    const mineOrdersList = useSelector(state => state.mineOrdersList)
    const { loading, error, orders } = mineOrdersList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(MyOrdersList())
    }, [dispatch])

    return (
        <div className="mt-6">
            <h1 className="orderHistory-heading text-5xl">Orders History</h1>
            {
                loading ? (
                    <div className="w-full flex justify-center">
                        <img className="w-12" src={circles} alt="preloader" />
                    </div>
                ) : (
                    !orders.length ? (
                        <MessageBox>
                            There is nothing to show <Link 
                            className="text-green-700 underline ml-2" to="/">Go back to home page</Link>
                        </MessageBox>
                    ):
                    error ? <h1 className="bg-red-100 text-red-600 py-6 mt-3 text-center rounded-lg mb-3">{error.message}</h1> : (
                        <div className="flex flex-col mt-6 bg">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow rounded-lg overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table style={{border: "1px solid rgba(0,0,0,0.1)"}} className="min-w-full">
                                        <thead className="bg-green-100 h-44">
                                                <tr className="h-24 tr-heading">
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-center text-xl 
                                                        font-medium text-gray-500 uppercase 
                                                        tracking-wider block mt-5"
                                                    >ID</th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 
                                                        text-center text-xl font-medium text-gray-500 
                                                        uppercase tracking-wider"
                                                    >DATE</th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 
                                                        text-center text-xl font-medium text-gray-500 
                                                        uppercase tracking-wider"
                                                    >TOTAL</th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 
                                                        text-center text-xl font-medium text-gray-500 
                                                        uppercase tracking-wider"
                                                    >PAID</th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 
                                                        text-center text-xl font-medium text-gray-500 
                                                        uppercase tracking-wider"
                                                    >DELIVERED</th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 
                                                        text-center text-xl font-medium text-gray-500 uppercase tracking-wider"
                                                    >ACTIONS</th>
                                                </tr>
                                            </thead>
                                            <tbody  className="bg-white border divide-y divide-gray-200">
                                                {orders.map((item) => (
                                                    <tr key={item._id} style={{borderBottom: "1px solid rgba(0,0,0,0.08)"}} className="py-2" >
                                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                                           {item._id}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                                        {item?.createdAt.substring(0,10)}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-green-500 text-center">
                                                        ${item?.totalPrice.toFixed(2)}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                                            {item?.isPaid ? item.paidAt.substring(0,10): "NO"}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                                            {item?.isDelivered ? item.deliveredAt.substring(0,10): "NO"}
                                                        </td>
                                                        <td className="flex justify-center">
                                                             <button className="px-6 py-4 whitespace-nowrap text-center 
                                                             rounded-lg border border-green-200 transition duration-200 
                                                              my-3 hover:bg-gray-200 hover:border hover:border-gray-100" type="button" onClick={() => {
                                                                 history.push(`/orderDetails/${item._id}`)
                                                             }}>
                                                                 Details
                                                             </button>
                                                         </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default OrderHistory


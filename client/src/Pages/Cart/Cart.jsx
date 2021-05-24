import React, { useEffect } from 'react'
import {useDispatch} from "react-redux"
import { addToCart } from '../../Actions/cart.action'

function Cart({location:{search},match:{params:{id}}}) {
    const Qty = search ? Number(search.split("=")[1]) : 1
    const dispatch = useDispatch()

    useEffect(() => {
        if(id) {
            dispatch(addToCart(id,Qty))
        }
    }, [dispatch,id,Qty])
    return (
        <div>
            Product information - {id} | {Qty}
        </div>
    )
}

export default Cart

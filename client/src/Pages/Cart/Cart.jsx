import React from 'react'

function Cart({location:{search},match:{params:{id}}}) {
    const Qty = search ? Number(search.split("=")[1]) : 1
    return (
        <div>
            Product information - {id} | {Qty}
        </div>
    )
}

export default Cart

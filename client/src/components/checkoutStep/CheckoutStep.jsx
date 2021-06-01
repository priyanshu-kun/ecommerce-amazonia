import React from 'react'
import "./checkoutStep.css"

function CheckoutStep({step1,step2,step3,step4}) {
    return (
        <div className="checkout-step  flex mt-8">
            <div className={`flex-1 text-center text-base py-0.5 text-white ${step1 && "active"} bg-gray-300`}>Sign In</div>
            <div className={`flex-1 text-center text-base py-0.5 text-white ${step2 && "active"} bg-gray-300`}>Shipping</div>
            <div className={`flex-1 text-center text-base py-0.5 text-white ${step3 && "active"} bg-gray-300`}>Payment</div>
            <div className={`flex-1 text-center text-base py-0.5 text-white ${step4 && "active"} bg-gray-300`}>Order Placed</div>
        </div>
    )
}

export default CheckoutStep

import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import CheckoutStep from "../../Components/checkoutStep/CheckoutStep"
import {savePaymentMethod} from "../../Actions/cart.action"
import PaymentRadio from "./PaymentRadioBtns"
import "./payment.css"

function Payment({history}) {
    const [paymentMethod, setPaymentMethod] = useState({})
    const _cart = useSelector(state => state.cartReducer)
    const {shippingAddress} = _cart 
    const dispatch = useDispatch()

    const handlePaymentSubmit = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod.name))
        history.push("/orderPlaced")
    }

    useEffect(() => {
        if((shippingAddress && Object.keys(shippingAddress).length === 0 && shippingAddress.constructor === Object)) {
            history.push("/shipping")
        }
    }, [])

    return (
        <div>
           <CheckoutStep step1 step2 step3 />
           <div className="payment-form-box mx-auto mt-24">
           <h1 className="payment-heading text-5xl">Payment Methods</h1>
           <hr className="my-5" />
                <form  onSubmit={handlePaymentSubmit}>
                <PaymentRadio  setPaymentMethod={setPaymentMethod} />
                    <div className="my-8 w-full grid place-items-center">
                        <button 
                            className="w-full max-w-4xl bg-green-500 py-6 mb-4 
                            text-center rounded-xl text-white transition 
                            duration-200 hover:bg-green-700" 
                            type="submit">Continue</button>
                    </div>
                </form>
           </div>
        </div>
    )
}

export default Payment

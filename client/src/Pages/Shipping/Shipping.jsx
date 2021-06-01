import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import CheckoutStep from "../../Components/checkoutStep/CheckoutStep"
import {saveShippingAddress} from "../../Actions/cart.action"
import "./shipping.css"


function Shipping({history}) {

    const _cart = useSelector(state => state.cartReducer)
    const {shippingAddress} = _cart 

    const initialState = {
        fullName: shippingAddress?.fullName ? shippingAddress.fullName : "",
        address: shippingAddress?.address ? shippingAddress.address : "",
        phoneNumber: shippingAddress?.phoneNumber ? shippingAddress.phoneNumber : "",
        city: shippingAddress?.city ? shippingAddress.city : "",
        postalCode: shippingAddress?.postalCode ? shippingAddress.postalCode : "",
        country: shippingAddress?.country ? shippingAddress.country : ""
    }

    const [inputChange, setInputChange] = useState(initialState)
    
    const signIn = useSelector(state => state.signIn)
    const {  userInfo = {} } = signIn
    const dispatch = useDispatch();

   

    useEffect(() => {
        if(userInfo && Object.keys(userInfo).length === 0 && userInfo.constructor === Object) {
            history.push("/signin")
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleChange = (e) => {
        setInputChange({ ...inputChange, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress(inputChange))
        setInputChange(initialState)
        history.push("/payment")
    }


    return (
        <>
            <CheckoutStep step1 step2 />
            <div className="shipping-form-box mx-auto mt-24">
                <div>
                    <h1 className="shipping-address text-5xl mb-6">
                        Shipping Address
                    </h1>
                </div>
                <hr className="mb-8" />
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <label htmlFor="full-name" className=" block mb-6">
                        <p className="mb-3 font-black ml-3">Full Name</p>
                        <input 
                            onChange={handleChange} 
                            value={inputChange.fullName} 
                            name="fullName" 
                            className="block w-full border-2 border-transparent 
                            px-6 py-5 outline-none hover:bg-transparent 
                            hover:shadow-input hover:border-gray-300 
                            focus:border-gray-300 hover:border-opacity-60 
                            focus:border-opacity-60 focus:bg-transparent 
                            focus:shadow-input rounded-xl transition duration-200 
                            placeholder-gray-400" 
                            type="text" 
                            id="full-name" 
                            placeholder="Full Name" required />
                    </label>
                    <label htmlFor="address" className=" block mb-6">
                        <p className="mb-3 font-black ml-3">Address</p>
                        <input 
                            onChange={handleChange} 
                            value={inputChange.address} 
                            name="address" 
                            className="block w-full border-2 border-transparent 
                            px-6 py-5 outline-none hover:bg-transparent 
                            hover:shadow-input hover:border-gray-300 
                            focus:border-gray-300 hover:border-opacity-60 
                            focus:border-opacity-60 focus:bg-transparent 
                            focus:shadow-input rounded-xl transition duration-200 
                            placeholder-gray-400" 
                            type="text" 
                            id="address" 
                            placeholder="Address" />
                    </label>
                    <label htmlFor="number" className=" block mb-6">
                        <p className="mb-3 font-black ml-3">Phone Number</p>
                        <input 
                            onChange={handleChange} 
                            value={inputChange.phoneNumber} 
                            name="phoneNumber" 
                            className="block w-full border-2 border-transparent 
                            px-6 py-5 outline-none hover:bg-transparent 
                            hover:shadow-input hover:border-gray-300 
                            focus:border-gray-300 hover:border-opacity-60 
                            focus:border-opacity-60 focus:bg-transparent 
                            focus:shadow-input rounded-xl transition duration-200 
                            placeholder-gray-400" 
                            type="number" 
                            id="phone-number" 
                            placeholder="Phone Number" />
                    </label>
                    <label htmlFor="city" className=" block mb-6">
                        <p className="mb-3 font-black ml-3">City</p>
                        <input 
                            onChange={handleChange} 
                            value={inputChange.city} 
                            name="city" 
                            className="block w-full border-2 border-transparent 
                            px-6 py-5 outline-none hover:bg-transparent 
                            hover:shadow-input hover:border-gray-300 
                            focus:border-gray-300 hover:border-opacity-60 
                            focus:border-opacity-60 focus:bg-transparent 
                            focus:shadow-input rounded-xl transition duration-200 
                            placeholder-gray-400" 
                            type="text" 
                            id="city" 
                            placeholder="City" />
                    </label>
                    <label htmlFor="postal-code" className=" block mb-6">
                        <p className="mb-3 font-black ml-3">Postal Code</p>
                        <input 
                            onChange={handleChange} 
                            value={inputChange.postalCode} 
                            name="postalCode" 
                            className="block w-full border-2 border-transparent 
                            px-6 py-5 outline-none hover:bg-transparent 
                            hover:shadow-input hover:border-gray-300 
                            focus:border-gray-300 hover:border-opacity-60 
                            focus:border-opacity-60 focus:bg-transparent 
                            focus:shadow-input rounded-xl transition duration-200 
                            placeholder-gray-400" 
                            type="text" 
                            id="postal-code" 
                            placeholder="Postal Code" />
                    </label>
                    <label htmlFor="country" className=" block mb-6">
                        <p className="mb-3 font-black ml-3">Country</p>
                        <input 
                            onChange={handleChange} 
                            value={inputChange.country} 
                            name="country" 
                            className="block w-full border-2 border-transparent 
                            px-6 py-5 outline-none hover:bg-transparent 
                            hover:shadow-input hover:border-gray-300 
                            focus:border-gray-300 hover:border-opacity-60 
                            focus:border-opacity-60 focus:bg-transparent 
                            focus:shadow-input rounded-xl transition duration-200 
                            placeholder-gray-400" 
                            type="text" 
                            id="country" 
                            placeholder="Country" />
                    </label>
                    <div className="my-8 w-full">
                        <button 
                            className="w-full bg-green-500 py-6 mb-4 
                            text-center rounded-xl text-white transition 
                            duration-200 hover:bg-green-700" 
                            type="submit">Continue</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Shipping

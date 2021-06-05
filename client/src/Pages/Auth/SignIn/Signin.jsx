import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { userSignIn } from "../../../Actions/user.auth.action"
import "./signin.css"

const initialState = {
    email: "",
    password: ""
}

function Signin({ history, location }) {
    const [inputChange, setInputChange] = useState(initialState)
    const signIn = useSelector(state => state.signIn)
    const { loading = true, error = {}, userInfo = {} } = signIn
    const dispatch = useDispatch();

    useEffect(() => {
        if (!loading && !(error && Object.keys(error).length === 0 && error.constructor === Object)) {
            return history.push("/signin")
        }

        else if (!loading && !(userInfo && Object.keys(userInfo).length === 0 && userInfo.constructor === Object)) {
            history.push("/")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])

    const handleChange = (e) => {
        setInputChange({ ...inputChange, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userSignIn(inputChange))
        setInputChange(initialState)
    }

    return (
        <div className="w-full mt-20 md:mt-36 sm:mt-60 ">
            <div style={{ border: "1px solid rgba(0,0,0,0.1)" }} className="w-1/4 rounded-2xl m-auto p-8 signin-box">
                <h1 className="text-4xl signin-heading mb-3">Sign In</h1>
                <hr className={`${(error && Object.keys(error).length === 0 && error.constructor === Object) && "mb-8"}`} />
                {
                    !(error && Object.keys(error).length === 0 && error.constructor === Object) && <h1 className="my-6 w-full py-4 text-center bg-red-100 rounded-xl text-red-600 text-2xl">{error.msg}</h1>
                }
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className=" block mb-6">
                        <p className="mb-3 font-black ml-3">Email</p>
                        <input onChange={handleChange} value={inputChange.email} name="email" className="block w-full border-2 border-transparent px-6 py-5 outline-none hover:bg-transparent hover:shadow-input hover:border-gray-300 focus:border-gray-300 hover:border-opacity-60 focus:border-opacity-60 focus:bg-transparent focus:shadow-input rounded-xl transition duration-200 placeholder-gray-400" type="email" id="email" placeholder="Email" />
                    </label>
                    <label htmlFor="password">
                        <p className="mb-3 font-black ml-3">Password</p>
                        <input onChange={handleChange} value={inputChange.password} name="password" className="block w-full border border-transparent px-6 py-5 outline-none hover:bg-transparent hover:shadow-input  hover:border-gray-300 focus:border-gray-300 hover:border-opacity-60 focus:border-opacity-60 focus:bg-transparent focus:shadow-input rounded-xl transition duration-200 placeholder-gray-400" type="password" id="password" placeholder="Password" />
                    </label>
                    <div className="mt-8 w-full">
                        <button className="w-full bg-green-500 py-6 mb-4 text-center rounded-xl text-white transition duration-200 hover:bg-green-700" type="submit">Submit</button>

                        <button className="w-full border border-green-500  py-6 text-center rounded-xl text-green-500 transition duration-200 hover:opacity-30" type="button" onClick={(e) => {
                            e.preventDefault()
                            const guestCradentials = { email: "jhon-wick@example.google.com", password: "jhon-wick" }
                            dispatch(userSignIn(guestCradentials))
                        }}>Guest Login</button>
                    </div>
                </form>
                <div className="mt-3">
                    <span className="opacity-60 text-base">Don't have a account: </span>
                    <Link className="text-green-500 uppercase font-black text-xl" to="/signup">Please sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Signin

import React from 'react'
import { Link } from "react-router-dom"
import "./signin.css"

function Signin() {
    return (
        <div className="w-full  mt-20 md:mt-36 sm:mt-60 ">
            <div style={{border: "1px solid rgba(0,0,0,0.1)"}} className="w-5/12 rounded-2xl m-auto p-8 signin-box">
                <h1 className="text-5xl signin-heading mb-6">Sign In</h1>
                <hr className="mb-10" />
                <form>
                    <label htmlFor="email" className=" block mb-6">
                        <p className="mb-3 font-black ml-3">Email</p>
                        <input className="block w-full border-2 border-transparent px-6 py-5 outline-none hover:bg-transparent hover:shadow-input hover:border-gray-300 focus:border-gray-300 hover:border-opacity-60 focus:border-opacity-60 focus:bg-transparent focus:shadow-input rounded-xl transition duration-200 placeholder-gray-400" type="email" id="email" placeholder="Email" />
                    </label>
                    <label htmlFor="password">
                        <p className="mb-3 font-black ml-3">Password</p>
                        <input className="block w-full border border-transparent px-6 py-5 outline-none hover:bg-transparent hover:shadow-input  hover:border-gray-300 focus:border-gray-300 hover:border-opacity-60 focus:border-opacity-60 focus:bg-transparent focus:shadow-input rounded-xl transition duration-200 placeholder-gray-400" type="password" id="password" placeholder="Password" />
                    </label>
                    <div className="my-8 w-full">
                        <button className="w-full bg-green-500 py-6 text-center rounded-xl text-white transition duration-200 hover:bg-green-700" type="button">Submit</button>
                    </div>
                </form>
                <div>
                    <span className="opacity-60 text-base">Don't have a account: </span><Link className="text-green-500 uppercase font-black text-xl" to="/signup">Please sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Signin

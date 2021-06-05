import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getMeAction } from '../../Actions/user.auth.action';
import BasketBall from "../../Assets/Basketball.gif"
import "./profile.css"

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}

function Profile() {

    const [handleInput, setHandleInput] = useState(initialState)
    const dispatch = useDispatch()
    const signIn = useSelector(state => state.signIn);
    const getMe = useSelector(state => state.getMe)
    const { userInfo: { _id } } = signIn;
    const { loading, error, user } = getMe;

    useEffect(() => {
       if(user !== undefined) {
           setHandleInput({...handleInput,name: user.name,email: user.email})
       }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])


    useEffect(() => {
        dispatch(getMeAction(_id))
    }, [dispatch, _id])



    const handleInputChange = (e) => {
        setHandleInput({...handleInput,[e.target.name]: e.target.value})
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        // TODO: handle update
    }

    return (
        <div className="mt-12">
            <h1 className="text-center profile-heading text-5xl">User Profile</h1>
            <div className="box flex justify-center items-center max-w-7xl mx-auto px-8 py-12 mt-6">
                {
                    loading ? (
                        <>
                            <h1 className="flex items-center justify-start">
                                <img className="mr-2" src={BasketBall} alt="loading" />
                                <span className="font-black">Loading...</span></h1>
                        </>
                    ) : (
                        error ? (
                            <h1 className="opacity-60 bg-red-200 text-red-600 rounded-lg px-24 py-8 w-full text-center">{error.message}</h1>
                        ) : (
                            <form onSubmit={handleUpdateSubmit} className="flex flex-col">
                                <label className="mt-6" htmlFor="fullname">
                                    <span className="mr-3 font-black mb-2 block">Name</span>
                                    <input className="py-6 px-6 block border outline-none hover:bg-transparent hover:shadow-input hover:border-gray-300 focus:border-gray-300 hover:border-opacity-60 focus:border-opacity-60 focus:bg-transparent focus:shadow-input transition duration-200 placeholder-gray-400 rounded-xl" type="text" value={handleInput.name} placeholder="name" onChange={handleInputChange} name="name" />
                                </label>
                                <label className="mt-6" htmlFor="email">
                                    <span className="mr-3 font-black mb-2 block">Email</span>
                                    <input className="py-6 px-6 block border outline-none hover:bg-transparent hover:shadow-input hover:border-gray-300 focus:border-gray-300 hover:border-opacity-60 focus:border-opacity-60 focus:bg-transparent focus:shadow-input rounded-xl transition duration-200 placeholder-gray-400" type="email" value={handleInput.email} placeholder="email" onChange={handleInputChange} name="email" />
                                </label>
                                <label className="mt-6" htmlFor="password">
                                    <span className="mr-3 font-black mb-2 block">Password</span>
                                    <input className="py-6 px-6 block border outline-none hover:bg-transparent hover:shadow-input hover:border-gray-300 focus:border-gray-300 hover:border-opacity-60 focus:border-opacity-60 focus:bg-transparent focus:shadow-input rounded-xl transition duration-200 placeholder-gray-400" type="password" placeholder="password" onChange={handleInputChange} name="password" value={handleInput.password} />
                                </label>
                                <label className="mt-6" htmlFor="confirm-password">
                                    <span className="mr-3 font-black mb-2 block">Confirm Password</span>
                                    <input className="py-6 px-6 block border outline-none hover:bg-transparent hover:shadow-input hover:border-gray-300 focus:border-gray-300 hover:border-opacity-60 focus:border-opacity-60 focus:bg-transparent focus:shadow-input rounded-xl transition duration-200 placeholder-gray-400" type="password" placeholder="confirm password" onChange={handleInputChange} name="confirmPassword" value={handleInput.confirmPassword} />
                                </label>
                                <div className="mt-6 w-full">
                                    <button className="bg-green-500 block w-full py-6 text-white rounded-lg transition duration-200 hover:bg-green-700 " type="submit">
                                        Update Profile
                            </button>
                                </div>
                            </form>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Profile

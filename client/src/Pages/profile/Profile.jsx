import React, { useEffect,useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getMeAction, updateUserProfile } from '../../Actions/user.auth.action';
import circles from "../../Assets/Circles-menu-3.gif"
import BasketBall from "../../Assets/Basketball.gif"
import "./profile.css"
import { UPDATE_USER_PROFILE_RESET } from '../../Constants/constants';

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
    const updateUser = useSelector(state => state.updateUser)
    const { userInfo: { _id } } = signIn;
    const { loading, error, user } = getMe;
    const {loading: loadingUpdate,error: errorUpdate,success} = updateUser;

    useEffect(() => {
       if(user !== undefined) {
        setHandleInput({...handleInput,name: user.name,email: user.email})
       }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])


    useEffect(() => {
        if(!user) {
            dispatch({type: UPDATE_USER_PROFILE_RESET})
            dispatch(getMeAction(_id))
        }
    }, [dispatch, _id,user])



    const handleInputChange = (e) => {
        setHandleInput({...handleInput,[e.target.name]: e.target.value})
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        // TODO: handle update
        if(handleInput.password !== handleInput.confirmPassword) {
            return alert("Password or confirm password must be same")
        }
        dispatch(updateUserProfile({
            userId: user._id,
            name: handleInput.name,
            email: handleInput.email,
            password: handleInput.password
        }))
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
                                {
                                    loadingUpdate && (
                                        <div className="w-full flex justify-center">
                                                <img className="w-12" src={circles} alt="preloader" />
                                             </div>
                                    )
                                }
                                {
                                    errorUpdate && (
                                        <h1 className="bg-red-100 text-red-600 py-2 text-center text-xl rounded-lg mb-3">{errorUpdate.message}</h1>
                                    )
                                }
                                {
                                    success && (
                                        <h1 className="bg-green-100 text-green-600 py-2 text-center text-xl rounded-lg mb-3">profile update successfully</h1>
                                    )
                                }
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
                                    <button className={`
                                     block w-full 
                                    py-6 text-white rounded-lg 
                                    transition duration-200 
                                    ${(user && 
                                    (user.name === handleInput.name && user.email === handleInput.email && !handleInput.password && !handleInput.confirmPassword)) ? "bg-gray-500 pointer-events-none": "bg-green-500 hover:bg-green-700"}`} type="submit">
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

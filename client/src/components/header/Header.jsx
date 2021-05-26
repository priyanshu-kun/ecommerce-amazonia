import React from 'react'
import shoppingBag from "../../Assets/shopping-bag.svg"
import shoppingCart from "../../Assets/shopping-cart.svg"
import {useDispatch, useSelector} from "react-redux"
import menu from "../../Assets/menu.svg"
import {Link} from "react-router-dom"
import caretDown from "../../Assets/chevron-down.svg"
import "./header.css"
import signOut from "../../Assets/logout.svg"
import { userSignout } from '../../Actions/user.auth.action'

function Header() {

    const _cart = useSelector(state => state.cartReducer)
    const {cart} = _cart;
    const signIn = useSelector(state => state.signIn)
    const {userInfo={}} = signIn
    const dispatch = useDispatch();

    const signOutHandler = (e) => {
        dispatch(userSignout())
    }

    return (
        <header className="
                    flex justify-between 
                    md:justify-center px-20 
                    items-center fixed top-0 
                    left-0 right-0 h-24 z-nav 
                    nav-header">
            <div>
                <Link className="
                font-black text-white text-4xl 
                hover:text-green-500 logo " to="/">amazonia</Link>
            </div>
            <ul className="
            flex w-2/6 justify-around h-full 
            items-center md:hidden lg:w-3/5">
                <li className="h-3/5">
                    <Link className="
                    text-2xl px-6 rounded-lg 
                    hover:bg-hoverBlackBg transition 
                    duration-200 flex transform 
                    scale-90 h-full  items-center cart" to="/cart">
                      <img className="mr-2 w-8"  src={shoppingCart} alt="shopping cart" />
                      <span className="">Cart</span>
                        {
                            cart.length > 0 && <div className="
                            ml-2 cart-label">
                                {cart.length}
                            </div>
                        }
                      </Link>
                </li>
                <li className="h-3/5">
                    <Link className="
                    text-2xl px-6 rounded-lg 
                    hover:bg-hoverBlackBg transition 
                    duration-200 flex transform 
                    scale-90 h-full items-center" to="/return-and-orders">
                      <img className="mr-2 w-8"  src={shoppingBag} alt="shopping bag" />
                      <span className="">Services List</span>
                      </Link>
                </li>
                <li className="h-3/5">
                    {
                        (userInfo && Object.keys(userInfo).length === 0 && userInfo.constructor === Object) ? 
                        (
                            <Link className="
                                text-2xl px-6 rounded-lg  
                                 transition bg-green-500
                                 hover:bg-green-700
                                 text-white
                                duration-200 flex transform 
                                scale-90 h-full items-center" to="/signin">
                                  <img className="mr-2 w-6"  src={menu} alt="menu cart" />
                                  <span className="">
                                    Sign In
                                  </span>
                              </Link>
                        ):(
                            <Link className="
                                text-2xl px-6 rounded-lg  
                                hover:bg-hoverBlackBg transition 
                                duration-200 flex transform 
                                scale-90 h-full items-center profile-tab relative" to="#">
                                    <div className="fixed w-80 top-16 py-3  rounded-xl shadow-sm drop-down">
                                        <Link className="py-3 pr-3 pl-6 w-full text-gray-800 font-black flex opacity-60" to="#signout" onClick={signOutHandler}>
                                            <img className="w-6 mr-2" src={signOut} alt="singout " /><span>Sign Out</span>
                                        </Link>
                                    </div>
                                  <img className="mr-2 w-6"  src={menu} alt="menu cart" />
                                  <span className="">
                                    {
                                        userInfo.name 
                                    }
                                  </span>
                                  <img className="-ml-0.5 transform scale-75 transition duration-300" src={caretDown} alt="caret down" />
                              </Link>
                        )
                    }
                </li>
            </ul>
        </header>
    )
}

export default Header

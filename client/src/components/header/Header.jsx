import React from 'react'
import shoppingBag from "../../Assets/shopping-bag.svg"
import shoppingCart from "../../Assets/shopping-cart.svg"
import menu from "../../Assets/menu.svg"
import {Link} from "react-router-dom"
import "./header.css"

function Header() {
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
                <li>
                    <Link className="
                    text-2xl px-6 rounded-lg py-3 
                    hover:bg-hoverBlackBg transition 
                    duration-200 flex transform 
                    scale-90 h-4/5 items-center" to="/cart">
                      <img className="mr-2 w-8"  src={shoppingCart} alt="shopping cart" />
                      <span className="">Cart</span>
                      </Link>
                </li>
                <li>
                    <Link className="
                    text-2xl px-6 rounded-lg py-3 
                    hover:bg-hoverBlackBg transition 
                    duration-200 flex transform 
                    scale-90 h-4/5 items-center" to="/return-and-orders">
                      <img className="mr-2 w-8"  src={shoppingBag} alt="shopping bag" />
                      <span className="">Return & Orders</span>
                      </Link>
                </li>
                <li>
                    <Link className="
                    text-2xl px-6 rounded-lg py-3 
                    hover:bg-hoverBlackBg transition 
                    duration-200 flex transform 
                    scale-90 h-4/5 items-center" to="/signin">
                      <img className="mr-2 w-6"  src={menu} alt="menu cart" />
                      <span className="">Account & Lists</span>
                      </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header

import React,{ useEffect,useState } from "react";
import Product from "./Components/products/Product"
import Footer from "./Components/footer/Footer"
import response from "./Seed/seed"
import shoppingBag from "./Assets/shopping-bag.svg"
import shoppingCart from "./Assets/shopping-cart.svg"
// import shoppingCart from "./Assets/sc.svg"
import menu from "./Assets/menu.svg"
import './App.css';


function App() {
  const [Seed, setSeed] = useState(JSON.parse(window.localStorage.getItem("data")) || [])


  useEffect(() => {
    if(!Seed.length) {
      response().then(data => {
        window.localStorage.setItem("data",JSON.stringify(data));
        setSeed(data)
      })
    }
  }, [])


  return (
    <div className="grid-container">
        <header className="bg-dark flex justify-between md:justify-center px-20 items-center fixed top-0 left-0 right-0 h-24 z-nav">
            <div>
                <a className="font-black text-white text-4xl hover:text-green-500 logo " href="/">amazonia</a>
            </div>
            <ul className="flex w-2/6 justify-around h-full items-center md:hidden lg:w-3/5">
                <li>
                    <a className="text-2xl px-6 rounded-lg py-3 hover:bg-hoverBlackBg transition duration-200 flex" href="/cart"><img className="mr-2 w-8"  src={shoppingCart} alt="shopping cart" /><span className="mt-2">Cart</span></a>
                </li>
                <li>
                    <a className="text-2xl px-6 rounded-lg py-3 hover:bg-hoverBlackBg transition duration-200 flex" href="/return-and-orders"><img className="mr-2 w-8"  src={shoppingBag} alt="shopping bag" /><span className="mt-2">Return & Orders</span></a>
                </li>
                <li>
                    <a className="text-2xl px-6 rounded-lg py-3 hover:bg-hoverBlackBg transition duration-200 flex" href="/signin"><img className="mr-2 w-6"  src={menu} alt="menu cart" /><span className="mt-1">Account & Lists</span></a>
                </li>
            </ul>
        </header>
        <main className="text-black py-6 px-32  pb-20 sm:px-8">
        <div>
          <h1 className="mt-20 mb-4 product-list-heading">Products List - </h1>
          <div class="row center">
           {
             !Seed.length ? <h1>Loading...</h1> : Seed.map(item => {
               return  <Product key={item.id} {...item}  />
             })
           }
          </div>
        </div>
        </main>
        <Footer />
    </div>
  );
}

export default App;

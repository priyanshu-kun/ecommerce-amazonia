import React,{ useEffect,useState } from "react";
import Product from "./components/products/Product"
import Footer from "./components/footer/Footer"
import response from "./Seed/seed"
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
        <header className="bg-dark flex justify-between px-20 items-center">
            <div>
                <a className="font-black text-white text-4xl logo" href="/">amazonia</a>
            </div>
            <ul className="flex w-2/12 justify-around ">
                <li>
                    <a className="text-2xl px-6 rounded-lg py-3 hover:bg-hoverBlackBg hover:text-white transition duration-200" href="/cart">Cart</a>
                </li>
                <li>
                    <a className="text-2xl px-6 rounded-lg py-3 hover:bg-hoverBlackBg hover:text-white transition duration-200" href="/signin">Sign In</a>
                </li>
            </ul>
        </header>
        <main className="text-black">
        <div>
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

import React,{ useEffect,useState } from "react";
import Footer from "./Components/footer/Footer"
import response from "./helper/ClientSeed/seed"
import {Switch,Route} from "react-router-dom"
import HomePage from "./Pages/Home-Page/Home_Page"
import ProductsPage from "./Pages/Products-Page/Products_Page"
import Header from "./Components/header/Header"
import Page404 from "./Pages/404-Page/Page404"
// import shoppingCart from "./Assets/sc.svg"
import './App.css';


function App() {
  const [Seed, setSeed] = useState(JSON.parse(window.localStorage.getItem("data")) || [])
  // flag to show empty array response from server
  const [isEmpty, setIsEmpty] = useState(false)


  useEffect(() => {
    if(!Seed.length) {
      response().then(data => {
        if(!data.length) {
          return setIsEmpty(true)
        }
        window.localStorage.setItem("data",JSON.stringify(data));
        setSeed(data)
      })
    }
  }, [Seed.length])


  return (
    <div className="grid-container">
        <Header />
        <main className="text-black py-6 px-28  pb-20 sm:px-8">
          <Switch>
            <Route path="/" exact render={(props) => <HomePage isEmpty={isEmpty} Seed={Seed} {...props} />} />
            <Route path="/products/:id" exact render={(props) => <ProductsPage Seed={Seed} {...props} />} />
            <Route path="*" exact component={Page404} />
          </Switch>
        </main>
        <Footer />
    </div>
  );
}

export default App;

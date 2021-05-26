import React,{ useEffect } from "react";
import Footer from "./Components/footer/Footer"
import {Switch,Route} from "react-router-dom"
import HomePage from "./Pages/Home-Page/Home_Page"
import ProductsPage from "./Pages/Products-Page/Products_Page"
import Header from "./Components/header/Header"
import Page404 from "./Pages/404-Page/Page404"
import {useDispatch, useSelector} from "react-redux"
import {listProducts} from "./Actions/product.actions"
import Signin from "./Pages/Auth/SignIn/Signin"
import Cart from "./Pages/Cart/Cart"
import './App.css';


function App() {
  const dispatch = useDispatch()
  const getProductList = useSelector((state) => state.productList);
  const { error={},loading=true,products=[] } = getProductList;

  useEffect(() => {
    dispatch(listProducts());
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <div className="grid-container">
        <Header />
        <main className="text-black py-6 px-28  pb-20 sm:px-8 sm:h-screen">
          <Switch>
            <Route path="/" exact render={(props) => <HomePage loading={loading} error={error} products={products} {...props} />} />
            <Route path="/products/:id" exact render={(props) => <ProductsPage  {...props} />} />
            <Route path="/cart/:id?" exact render={(props) => <Cart  {...props} />} />
            <Route path="/signin" exact render={(props) => <Signin  {...props} />} />
            <Route path="*" exact component={Page404} />
          </Switch>
        </main>
        <Footer />
    </div>
  );
}

export default App;

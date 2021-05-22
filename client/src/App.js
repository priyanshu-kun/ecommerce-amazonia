import React,{ useEffect } from "react";
import Footer from "./Components/footer/Footer"
import {Switch,Route} from "react-router-dom"
import HomePage from "./Pages/Home-Page/Home_Page"
import ProductsPage from "./Pages/Products-Page/Products_Page"
import Header from "./Components/header/Header"
import Page404 from "./Pages/404-Page/Page404"
import {useDispatch, useSelector} from "react-redux"
import {listProducts} from "./Actions/product.actions"
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
        <main className="text-black py-6 px-28  pb-20 sm:px-8">
          <Switch>
            <Route path="/" exact render={(props) => <HomePage loading={loading} error={error} products={products} {...props} />} />
            <Route path="/products/:id" exact render={(props) => <ProductsPage error={error} loading={loading} products={products} {...props} />} />
            <Route path="*" exact component={Page404} />
          </Switch>
        </main>
        <Footer />
    </div>
  );
}

export default App;

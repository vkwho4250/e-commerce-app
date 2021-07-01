import "../css/App.css";

import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import { useHistory } from "react-router";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Cart from "./Cart";
import { v4 as uuidv4 } from "uuid";

export const AppContext = React.createContext();

function App() {
  const [deviceLayout, setDeviceLayout] = useState("desktop");
  const [cartItems, setCartItems] = useState([
    {
      itemId: uuidv4(),
      productId: 2,
      quantity: 5,
    },
    {
      itemId: uuidv4(),
      productId: 5,
      quantity: 3,
    },
  ]);

  const handleItemAdd = (itemId) => {};

  const handleItemDelete = (itemId) => {};

  const handleItemEdit = (itemId) => {};

  // update website layout
  const handleDeviceLayout = () => {
    setDeviceLayout("mobile");
  };

  // redirect to product page
  let history = useHistory();

  const handleSeeProduct = (productId) => {
    history.push(`/product/${productId}`);
  };

  const appContextValue = {
    deviceLayout,
    handleDeviceLayout,
    handleSeeProduct,
  };

  return (
    <>
      <ScrollToTop />
      <AppContext.Provider value={appContextValue}>
        <Navbar />
        <Switch>
          <Route path="/category/:categoryName">
            <Category />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Cart cartItems={cartItems} />
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;

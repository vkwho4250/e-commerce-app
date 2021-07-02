import "../css/App.css";

import React, { useEffect, useState } from "react";
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
import productsData from "../data.json";

export const AppContext = React.createContext();

function App() {
  const [deviceLayout, setDeviceLayout] = useState("desktop");
  const [showCart, setShowCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([
    {
      id: uuidv4(),
      productId: 3,
      quantity: 10,
    },
    {
      id: uuidv4(),
      productId: 2,
      quantity: 1,
    },
  ]);

  useEffect(() => {
    const calcCartTotal = () => {
      let total = 0;

      cartItems.forEach((item) => {
        const matchProduct = productsData.find(
          (product) => product.id === item.productId,
        );
        total += item.quantity * matchProduct["price"];
      });

      setCartTotal(total);
    };

    calcCartTotal();
  }, [cartItems]);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  const handleItemRemoveAll = () => {
    setCartItems([]);
  };

  const handleItemAdd = (productId, quantity) => {
    const existingItem = cartItems.find((item) => item.productId === productId);

    if (existingItem === undefined) {
      // added item is not within cart: add as new item

      const newItem = {
        id: uuidv4(),
        productId,
        quantity,
      };
      setCartItems((prevValue) => [...prevValue, newItem]);
    } else {
      // added item already exists: edit quantity
      handleItemEdit(existingItem.id, existingItem.quantity + quantity);
    }
  };

  const handleItemDelete = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleItemEdit = (itemId, newQuantity) => {
    const updatedCartItems = [...cartItems];
    const index = cartItems.findIndex((item) => item.id === itemId);
    updatedCartItems[index] = {
      ...cartItems[index],
      quantity: newQuantity,
    };
    setCartItems(updatedCartItems);
  };

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
    handleItemAdd,
    handleItemDelete,
    handleItemEdit,
    handleItemRemoveAll,
  };

  return (
    <>
      <ScrollToTop />
      <AppContext.Provider value={appContextValue}>
        <Navbar handleShowCart={handleShowCart} />
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
        {showCart && (
          <Cart
            cartItems={cartItems}
            cartTotal={cartTotal}
            handleShowCart={handleShowCart}
          />
        )}
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;

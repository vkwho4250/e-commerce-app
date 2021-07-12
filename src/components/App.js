import "../css/App.css";

import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

import { v4 as uuidv4 } from "uuid";
import Cart from "./Cart";
import productsData from "../data.json";

const LOCAL_STORAGE_KEY = "reactEcommerceAudiophile.cartItems";

export const AppContext = React.createContext();

function App() {
  const [deviceLayout, setDeviceLayout] = useState("desktop");
  const [showCart, setShowCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const handleDeviceLayout = () => {
      console.log("handling resize");
      console.log(window.innerWidth);

      if (window.innerWidth > 767) {
        setDeviceLayout("desktop");
        console.log("desktop");
      } else if (window.innerWidth > 374) {
        setDeviceLayout("tablet");
        console.log("tablet");
      } else {
        setDeviceLayout("mobile");
        console.log("mobile");
      }
    };

    // initial render
    handleDeviceLayout();

    // all other resizing events
    window.addEventListener("resize", handleDeviceLayout);

    return () => {
      window.removeEventListener("resize", handleDeviceLayout);
    };
  }, []);

  // Load cart items on initial render
  useEffect(() => {
    const cartItemsJSON = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (cartItemsJSON !== null) {
      setCartItems(JSON.parse(cartItemsJSON));
    }
  }, []);

  // For changes in cart items:
  useEffect(() => {
    // 1. save/update cart items in local storage
    const saveToLocalStorage = () => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems));
    };

    // 2. re-calculate cart total
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

    saveToLocalStorage();
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
      // added item is not within cart -> add as new item

      const newItem = {
        id: uuidv4(),
        productId,
        quantity,
      };
      setCartItems((prevValue) => [...prevValue, newItem]);
    } else {
      // added item already exists -> edit quantity
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

  // redirect to any page
  let history = useHistory();

  const handleRedirect = (destination) => {
    history.push(destination);
  };

  const goBack = () => history.goBack();

  const appContextValue = {
    deviceLayout,
    // handleDeviceLayout,
    handleRedirect,
    handleItemAdd,
    handleItemDelete,
    handleItemEdit,
    handleItemRemoveAll,
    goBack,
    cartItems,
    cartTotal,
  };

  return (
    <>
      <ScrollToTop />
      <AppContext.Provider value={appContextValue}>
        <Navbar handleShowCart={handleShowCart} />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
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
        {showCart && <Cart handleShowCart={handleShowCart} />}
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;

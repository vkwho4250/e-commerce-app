import "../css/App.css";

import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ScrollToTop from "../ScrollToTop";
import productsData from "../data.json";

// Shared Components
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cart from "./Cart";

// Pages
import Category from "./pages/Category";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

const LOCAL_STORAGE_KEY = "reactEcommerceAudiophile.cartItems";

export const AppContext = React.createContext();

function App() {
  const [deviceLayout, setDeviceLayout] = useState("desktop");
  const [showCart, setShowCart] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showDropMenu, setShowDropMenu] = useState(false);

  // == Display ===

  useEffect(() => {
    const handleDeviceLayout = () => {
      if (window.innerWidth > 1250) {
        setDeviceLayout("desktop");
        setShowDropMenu(false);
      } else if (window.innerWidth > 375) {
        setDeviceLayout("tablet");
      } else {
        setDeviceLayout("mobile");
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

  const handleDropMenu = (e) => {
    console.log(e.target.className);
    console.log(e.currentTarget.className);
    if (e.target.className !== "category-nav") {
      setShowDropMenu(!showDropMenu);
    }
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  // == Cart Items ===

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

  // == Redirect ==

  let history = useHistory();

  const handleRedirect = (destination) => {
    history.push(destination);
  };

  const goBack = () => history.goBack();

  // == Shared states & actions ==
  const appContextValue = {
    deviceLayout,
    showDropMenu,
    handleDropMenu,
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

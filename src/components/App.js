import "../css/App.css";

import React, { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Category from "./pages/Category";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

export const AppContext = React.createContext();

function App() {
  const [deviceLayout, setDeviceLayout] = useState("desktop");

  const handleDeviceLayout = () => {
    setDeviceLayout("mobile");
  };

  const appContextValue = {
    deviceLayout,
    handleDeviceLayout,
  };

  return (
    <Router>
      <ScrollToTop />
      <AppContext.Provider value={appContextValue}>
        <Navbar />
        <Switch>
          <Route path="/category/:handle">
            <Category />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </AppContext.Provider>
    </Router>
  );
}

export default App;

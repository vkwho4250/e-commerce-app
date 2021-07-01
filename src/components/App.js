import React, { useState } from "react";
import "../css/App.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Category from "./pages/Category";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    <AppContext.Provider value={appContextValue}>
      <Router>
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
      </Router>
    </AppContext.Provider>
  );
}

export default App;

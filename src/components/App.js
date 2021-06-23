import React from "react";
import "../css/App.css";

import Home from "./pages/Home";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />;
      <Footer />;
    </>
  );
}

export default App;

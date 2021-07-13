import React, { useContext } from "react";
import { ReactComponent as LogoSVG } from "../assets/shared/desktop/logo.svg";
import { AppContext } from "./App";

export default function Logo() {
  const { handleRedirect } = useContext(AppContext);

  return <LogoSVG className="logo" onClick={() => handleRedirect("/")} />;
}

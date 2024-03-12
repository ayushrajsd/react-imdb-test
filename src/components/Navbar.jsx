import React from "react";
import Logo from "../MovieLogo.png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4">
      <Link to="/">
        <img className="w-[50px]" src={Logo} />
      </Link>

      <Link to="/">Movies</Link>

      <Link to="/watchlist">Watchlist</Link>
    </div>
  );
}

export default NavBar;

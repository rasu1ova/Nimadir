import React from "react";
import { Link } from "react-router-dom";


function Header() {
  return (
    <>
      <header className="container">
        <nav>
          {/* <Link to="/weather">Weather</Link>
          <Link to="/clothes">Clothes</Link> */}
          <Link to="/weather">Weather</Link>
          <Link to="/clothes">Clothes</Link>
          <Link to="/watch">Watch</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;

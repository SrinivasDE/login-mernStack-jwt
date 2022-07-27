import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../App";
import "./nav.css";

const NavBar = () => {
  const [token, setToken] = useContext(store);

  return (
    <nav>
      <ul>
      <Link className="link" to="">
            Home
          </Link>
      {!token && (
        <>
          <Link className="link" to="/register">
            Register
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
          </>
        
      )}
      </ul>
    </nav>
  );
};

export default NavBar;

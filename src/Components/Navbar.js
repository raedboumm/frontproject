import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/slices/UserSlice";
import logo from "../logo.png";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.user);
  return (
    <div className="navbar">
      <Link to='/'><img src={logo} /></Link>

      {isAuth ? (
        <div className="sousnav">
          <Link to="/">Home</Link>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <div className="sousnav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

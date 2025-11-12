import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Toggle dark/light theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/pets">Pets & Supplies</Link>
      </li>
      <li>
        <Link to="/add-listing">Add Listing</Link>
      </li>
      <li>
        <Link to="/my-listings">My Listings</Link>
      </li>
      <li>
        <Link to="/my-orders">My Orders</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 md:px-10">
      {/* Left: Logo + Name */}
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            {/* mobile menu icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2 text-xl font-bold">
          <img src="/logo.png" alt="logo" className="w-8 h-8" />
          PawMart
        </Link>
      </div>

      {/* Middle: Menu (desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">{navLinks}</ul>
      </div>

      {/* Right: Profile + Theme + Login */}
      <div className="navbar-end flex items-center gap-3">
        {/* Dark/Light toggle */}
        <button onClick={toggleTheme} className="btn btn-ghost btn-circle">
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        {/* Avatar */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.pravatar.cc/100?img=12" alt="profile" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>

        {/* Login Button */}
        <Link to="/login" className="btn btn-primary hidden sm:inline-flex">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

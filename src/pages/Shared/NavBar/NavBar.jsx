import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProviders";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Successfully logout!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navItems = (
    <>
      <NavLink>Home</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Service</NavLink>
      <NavLink>Blog</NavLink>
      <NavLink>Contact</NavLink>
      {user ? (
        <>
          <Link to="/bookings">Bookings</Link>
          <Link onClick={handleLogout}>Logout</Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-4"
          >
            {navItems}
          </ul>
        </div>
        <Link className="normal-case text-xl">
          <img className="h-20 w-16" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-10">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-sm btn-error">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default NavBar;

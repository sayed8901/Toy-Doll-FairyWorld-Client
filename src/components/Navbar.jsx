import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { AuthContext } from "../AuthContext/AuthProvider";
import { useContext } from "react";
import LazyLoad from "react-lazy-load";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    //   console.log(user);

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={`my-5 lg:my-0 mx-2 ${({ isActive }) => (isActive ? "active" : "")}`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={`mb-5 lg:mb-0 mx-2 ${({ isActive }) => (isActive ? "active" : "")}`}
        >
          login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={`mb-5 lg:mb-0 mx-2 ${({ isActive }) => (isActive ? "active" : "")}`}
        >
          register
        </NavLink>
      </li>

    </>
  );

  return (
    <div className="navbar my-container bg-base-100 h-24 mb-4">
      <div className="navbar-start">
        {/* dropdown navbar for small display */}
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>

        <Link to={"/"} className="normal-case text-xl">
          <div className="relative">
            <img className="absolute inset-0" src={logo} alt="" />
            <br />
            <h2 className="mt-4 text-2xl px-4 font-bold text-gradient">
              Doll_FairyWorld
            </h2>
          </div>
        </Link>
      </div>

      {/* wide navbar for large display */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal ml-20 px-1">{navItems}</ul>
      </div>

      {/* to dynamically show user photo & name */}
      <div className="navbar-end">
      {user ? (
          <div className="flex gap-4 justify-center items-center">
            <div
              className="tooltip tooltip-bottom tooltip-primary"
              data-tip={user.displayName}
            >
              <LazyLoad>
                <img
                  className="rounded-full w-12"
                  src={user.photoURL}
                  alt=""
                />
              </LazyLoad>
            </div>
            <button onClick={logOut} className="btn btn-primary w-24">
              Log out
            </button>
          </div>
        ) : (
          <button>
            <Link to={"/login"} className="btn btn-primary w-24">
              log in
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
